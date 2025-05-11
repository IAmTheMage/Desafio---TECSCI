import { Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantController } from './plant.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  controllers: [PlantController],
  providers: [PlantService],
  imports: [PrismaModule]
})
export class PlantModule {}
