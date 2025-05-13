// src/seed/seed.service.ts

import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SeedService implements OnModuleInit {
  private readonly logger = new Logger(SeedService.name);

  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    await this.seedMetrics();
  }

  async seedMetrics() {
    /*try {
      const filePath = path.join(__dirname, '../../data/metrics.json');
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const metrics = JSON.parse(rawData);

      const records = metrics.map((item) => ({
        timestamp: new Date(item.datetime["$date"]),
        activePowerW: item.potencia_ativa_watt,
        temperatureC: item.temperatura_celsius,
        inverterId: item.inversor_id,
      }));

      // Dividir em lotes para evitar sobrecarga
      const chunkSize = 1000;
      for (let i = 0; i < records.length; i += chunkSize) {
        const chunk = records.slice(i, i + chunkSize);
        await this.prisma.metric.createMany({ data: chunk, skipDuplicates: true });
      }

      this.logger.log(`Seed finalizado com ${records.length} registros.`);
    } catch (err) {
      this.logger.error('Erro ao importar dados JSON', err);
    }*/
  }
}
