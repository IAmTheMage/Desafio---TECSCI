import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantModule } from './plant/plant.module';

@Module({
  imports: [PlantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
