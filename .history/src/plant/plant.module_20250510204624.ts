import { Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantController } from './plant.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PlantController],
  providers: [PlantService],
})
export class PlantModule {}
