import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantModule } from './plant/plant.module';
import { InverterModule } from './inverter/inverter.module';

@Module({
  imports: [PlantModule, InverterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
