import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantModule } from './plant/plant.module';
import { InverterModule } from './inverter/inverter.module';
import { SeedService } from './seed/seed.service';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [PlantModule, InverterModule, MetricsModule],
  controllers: [AppController],
  providers: [AppService, SeedService],
})
export class AppModule {}
