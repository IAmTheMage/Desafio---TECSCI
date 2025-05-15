import { Test, TestingModule } from '@nestjs/testing';
import { MetricsService } from './metrics.service';
import { PrismaService } from '../prisma.service';

describe('MetricsService - Integração', () => {
  let service: MetricsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetricsService, PrismaService],
    }).compile();

    service = module.get<MetricsService>(MetricsService);
    prisma = module.get<PrismaService>(PrismaService);
    await prisma.$connect();
  });


  it('deve retornar a potência máxima por dia', async () => {
    const plant = await prisma.plant.create({
      data: {
        name: 'Usina de Teste',
        location: 'Testópolis',
      },
    });

    const inverter = await prisma.inverter.create({
      data: {
        model: 'INV-2000',
        capacityKW: 2.0,
        plantId: plant.id,
        installedAt: new Date(),
      },
    });

    const baseDate = new Date('2025-01-01T00:00:00Z');

    const metrics = [
      { timestamp: new Date('2025-01-01T00:00:00Z'), activePowerW: 500, temperatureC: 25 },
      { timestamp: new Date('2025-01-01T10:00:00Z'), activePowerW: 1000, temperatureC: 26 },
      { timestamp: new Date('2025-01-02T08:00:00Z'), activePowerW: 800, temperatureC: 24 },
      { timestamp: new Date('2025-01-02T14:00:00Z'), activePowerW: 1500, temperatureC: 27 },
      { timestamp: new Date('2025-01-03T12:00:00Z'), activePowerW: 1100, temperatureC: 23 },
    ];

    await prisma.metric.createMany({
      data: metrics.map((m) => ({
        ...m,
        inverterId: inverter.id,
      })),
    });

    const result = await service.getMaxPowerPerDay(
      inverter.id,
      '2025-01-01',
      '2025-01-03'
    );

    console.log(result)

    expect(result).toEqual([
      { date: new Date('2025-01-01'), max_power: 1000 },
      { date: new Date('2025-01-02'), max_power: 1500 },
      { date: new Date('2025-01-03'), max_power: 1100 },
    ]);
  });

  it('deve retornar a temperatura média por dia', async () => {
    const plant = await prisma.plant.create({
      data: {
        name: 'Usina Temperatura',
        location: 'Calorândia',
      },
    });

    const inverter = await prisma.inverter.create({
      data: {
        model: 'INV-TEMP',
        capacityKW: 2.5,
        plantId: plant.id,
        installedAt: new Date(),
      },
    });

    const metrics = [
      { timestamp: new Date('2025-01-01T01:00:00Z'), activePowerW: 400, temperatureC: 22 },
      { timestamp: new Date('2025-01-01T12:00:00Z'), activePowerW: 900, temperatureC: 26 },
      { timestamp: new Date('2025-01-02T03:00:00Z'), activePowerW: 700, temperatureC: 24 },
      { timestamp: new Date('2025-01-02T15:00:00Z'), activePowerW: 1300, temperatureC: 28 },
      { timestamp: new Date('2025-01-03T13:00:00Z'), activePowerW: 1000, temperatureC: 25 },
    ];

    await prisma.metric.createMany({
      data: metrics.map((m) => ({
        ...m,
        inverterId: inverter.id,
      })),
    });

    const result = await service.getAverageTemperaturePerDay(
      inverter.id,
      '2025-01-01',
      '2025-01-03'
    );

    console.log(result)

    expect(result).toEqual([
      { date: new Date('2025-01-01T00:00:00.000Z'), avg_temperature: 24 },
      { date: new Date('2025-01-02T00:00:00.000Z'), avg_temperature: 26 },
      { date: new Date('2025-01-03T00:00:00.000Z'), avg_temperature: 25 },
    ]);


  });

  it('deve calcular corretamente a geração de energia de uma planta no período especificado', async () => {
    const plant = await prisma.plant.create({
      data: {
        name: 'Usina Solar',
        location: 'Solândia',
      },
    });

    const inverter = await prisma.inverter.create({
      data: {
        model: 'INV-SOLAR',
        capacityKW: 5,
        plantId: plant.id,
        installedAt: new Date(),
      },
    });

    const metrics = [
      { timestamp: new Date('2025-01-01T01:00:00Z'), activePowerW: 500, temperatureC: 20 },
      { timestamp: new Date('2025-01-01T02:00:00Z'), activePowerW: 1000, temperatureC: 20 },
      { timestamp: new Date('2025-01-01T03:00:00Z'), activePowerW: 1500, temperatureC: 20 },
      { timestamp: new Date('2025-01-01T04:00:00Z'), activePowerW: 1000, temperatureC: 20 },
      { timestamp: new Date('2025-01-01T05:00:00Z'), activePowerW: 500, temperatureC: 20 },
    ];

    await prisma.metric.createMany({
      data: metrics.map((m) => ({
        ...m,
        inverterId: inverter.id,
        
      })),
    });

    const result = await service.getPlantGeneration(
      plant.id,
      '2025-01-01T00:00:00Z',
      '2025-01-01T06:00:00Z'
    );


    expect(result).toBeCloseTo(4000, 5);
  });


  it('deve calcular corretamente a geração de energia de um inversor no período especificado', async () => {
    const plant = await prisma.plant.create({
      data: {
        name: 'Usina Solar Teste',
        location: 'Solândia',
      },
    });

    const inverter = await prisma.inverter.create({
      data: {
        model: 'INV-TST',
        capacityKW: 5,
        plantId: plant.id,
        installedAt: new Date(),
      },
    });

    const metrics = [
      { timestamp: new Date('2025-01-01T01:00:00Z'), activePowerW: 500, temperatureC: 20 },
      { timestamp: new Date('2025-01-01T02:00:00Z'), activePowerW: 1000, temperatureC: 20 },
      { timestamp: new Date('2025-01-01T03:00:00Z'), activePowerW: 1500, temperatureC: 20 },
      { timestamp: new Date('2025-01-01T04:00:00Z'), activePowerW: 1000, temperatureC: 20 },
      { timestamp: new Date('2025-01-01T05:00:00Z'), activePowerW: 500, temperatureC: 20 },
    ];

    await prisma.metric.createMany({
      data: metrics.map((m) => ({
        ...m,
        inverterId: inverter.id,
      })),
    });

    const result = await service.getInverterGeneration(
      inverter.id,
      '2025-01-01T00:00:00Z',
      '2025-01-01T06:00:00Z'
    );

    expect(result).toBeCloseTo(4000, 5);
  });

  
});
