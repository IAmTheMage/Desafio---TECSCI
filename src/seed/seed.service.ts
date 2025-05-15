// src/seed/seed.service.ts

import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SeedService implements OnModuleInit {
  private readonly logger = new Logger(SeedService.name);

  constructor(private readonly prisma: PrismaService) {
    const filePath = path.join(__dirname, '../../data/metrics.json');
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const metrics = JSON.parse(rawData);

    //console.log(metrics)
  }

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    await this.seedPlants();
  }

  async seedPlants() {
    this.logger.log("Checking or creating plants...");
  
    const plantsToSeed = [
      { name: "Usina 1", location: "São Paulo" },
      { name: "Usina 2", location: "São Paulo" }
    ];
  
    const plantIds: Record<string, number> = {};
  
    for (const plant of plantsToSeed) {
      const existing = await this.prisma.plant.findFirst({ where: { name: plant.name } });
  
      if (existing) {
        plantIds[plant.name] = existing.id;
      } else {
        const created = await this.prisma.plant.create({ data: plant });
        plantIds[plant.name] = created.id;
      }
    }
  
    const plantsWereCreated = plantsToSeed.every(p => !plantIds[p.name]); // Nenhuma foi criada
    const plantsExist = plantsToSeed.every(p => !!plantIds[p.name]);      // Todas existem
  
    if (plantsExist) {
      const plant1Id = plantIds["Usina 1"];
      const plant2Id = plantIds["Usina 2"];
      const invertersExist = await this.prisma.inverter.findFirst({
        where: { plantId: { in: [plant1Id, plant2Id] } }
      });
  
      if (!invertersExist) {
        await this.seedInverters(plant1Id, plant2Id);
      } else {
        this.logger.log("Inverters already exist. Skipping seedInverters.");
      }
    }
  }
  
  async seedInverters(plant1Id: number, plant2Id: number) {
    this.logger.log("Creating inverters...");
  
    const inverterData = [
      { model: "Inversor A1", capacityKW: 50, plantId: plant1Id },
      { model: "Inversor A2", capacityKW: 60, plantId: plant1Id },
      { model: "Inversor A3", capacityKW: 70, plantId: plant1Id },
      { model: "Inversor A4", capacityKW: 80, plantId: plant1Id },
      { model: "Inversor B1", capacityKW: 55, plantId: plant2Id },
      { model: "Inversor B2", capacityKW: 65, plantId: plant2Id },
      { model: "Inversor B3", capacityKW: 75, plantId: plant2Id },
      { model: "Inversor B4", capacityKW: 85, plantId: plant2Id }
    ];
  
    const createdInverters = await Promise.all(
      inverterData.map(data =>
        this.prisma.inverter.create({
          data,
        })
      )
    );

    const inverterIds = createdInverters.map(inv => inv.id);
    await this.seedMetrics(inverterIds)
  
    this.logger.log("Inverters created successfully.");
  }
  

  async seedMetrics(invertersIds: number[]) {
    try {
      const filePath = path.join(__dirname, '../../data/metrics.json');
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const metrics = JSON.parse(rawData);

      const records = metrics.map((item) => {
        const inversorId =  invertersIds[item.inversor_id - 1]
        return {
          timestamp: new Date(item.datetime["$date"]),
          activePowerW: item.potencia_ativa_watt ? item.potencia_ativa_watt : 0,
          temperatureC: item.temperatura_celsius ? item.temperatura_celsius : 0,
          inverterId: inversorId,
        }
      });

      // Dividir em lotes para evitar sobrecarga
      const chunkSize = 1000;
      for (let i = 0; i < records.length; i += chunkSize) {
        this.logger.log(`Inserting data ${i}:${i+chunkSize} of ${metrics.length}`)
        const chunk = records.slice(i, i + chunkSize);
        await this.prisma.metric.createMany({ data: chunk, skipDuplicates: true });
      }

      this.logger.log(`Seed finalizado com ${records.length} registros.`);
    } catch (err) {
      this.logger.error('Erro ao importar dados JSON', err);
    }
  }
}
