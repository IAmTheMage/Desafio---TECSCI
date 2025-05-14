import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

interface TimeseriesValue {
  value: number;
  date: Date;
}

interface EntityWithPower {
  power: TimeseriesValue[];
}

@Injectable()
export class MetricsService {
  constructor(private prisma: PrismaService) {}

  async getMaxPowerPerDay(inverterId: number, startDate: string, endDate: string) {
    const end = new Date(endDate);
    end.setDate(end.getDate() + 1);

    return this.prisma.$queryRaw<
      { date: string; max_power: number }[]
    >`
      SELECT 
        DATE("timestamp") as date,
        MAX("activePowerW") as max_power
      FROM "Metric"
      WHERE "inverterId" = ${inverterId}
        AND "timestamp" BETWEEN ${new Date(startDate)} AND ${end}
      GROUP BY DATE("timestamp")
      ORDER BY DATE("timestamp");
    `;
  }

  async getAverageTemperaturePerDay(inverterId: number, startDate: string, endDate: string) {
    const end = new Date(endDate);
    end.setDate(end.getDate() + 1);

    return this.prisma.$queryRaw<
      { date: string; avg_temperature: number }[]
    >`
      SELECT 
        DATE("timestamp") as date,
        AVG("temperatureC") as avg_temperature
      FROM "Metric"
      WHERE "inverterId" = ${inverterId}
        AND "timestamp" BETWEEN ${new Date(startDate)} AND ${end}
      GROUP BY DATE("timestamp")
      ORDER BY DATE("timestamp");
    `;
  }

  async getPlantGeneration(plantId: number, startDate: string, endDate: string): Promise<number> {
    const inverters = await this.prisma.inverter.findMany({
      where: { plantId },
      select: { id: true },
    });

    if (inverters.length === 0) return 0;

    const entitiesWithPower: EntityWithPower[] = [];

    for (const inverter of inverters) {
      const metrics = await this.prisma.metric.findMany({
        where: {
          inverterId: inverter.id,
          timestamp: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        },
        orderBy: {
          timestamp: 'asc',
        },
        select: {
          timestamp: true,
          activePowerW: true,
        },
      });

      const power = metrics.map((m) => ({
        value: m.activePowerW,
        date: m.timestamp,
      }));

      if (power.length > 0) {
        entitiesWithPower.push({ power });
      }
    }

    return this.calcInvertersGeneration(entitiesWithPower);
  }

  async getInverterGeneration(inverterId: number, startDate: string, endDate: string): Promise<number> {
    const metrics = await this.prisma.metric.findMany({
      where: {
        inverterId,
        timestamp: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      orderBy: {
        timestamp: 'asc',
      },
      select: {
        timestamp: true,
        activePowerW: true,
      },
    });

    const power = metrics.map((m) => ({
      value: m.activePowerW,
      date: m.timestamp,
    }));

    if (power.length === 0) return 0;

    const entitiesWithPower: EntityWithPower[] = [{ power }];

    return this.calcInvertersGeneration(entitiesWithPower);
  }


  private calcInvertersGeneration(entitiesWithPower: EntityWithPower[]): number {
    if (!entitiesWithPower || entitiesWithPower.length === 0) {
      return 0;
    }

    let totalGeneration = 0;

    for (const entity of entitiesWithPower) {
      if (!entity.power || entity.power.length < 2) {
        continue;
      }

      for (let i = 0; i < entity.power.length - 1; i++) {
        try {
          const currentPower = entity.power[i].value;
          const nextPower = entity.power[i + 1].value;

          if (
            currentPower < 0 ||
            nextPower < 0 ||
            isNaN(currentPower) ||
            isNaN(nextPower)
          ) {
            continue;
          }

          const currentDate = entity.power[i].date;
          const nextDate = entity.power[i + 1].date;

          if (!(currentDate instanceof Date) || !(nextDate instanceof Date)) {
            continue;
          }

          const timeDelta =
            (nextDate.getTime() - currentDate.getTime()) / (1000 * 3600);

          if (timeDelta <= 0 || timeDelta > 24) {
            continue;
          }

          const generation = ((nextPower + currentPower) / 2) * timeDelta;
          totalGeneration += generation;
        } catch (error) {
          continue;
        }
      }
    }

    return parseFloat(totalGeneration.toFixed(6));
  }
}
