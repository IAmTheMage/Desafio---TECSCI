import { Module } from '@nestjs/common';
import { InverterService } from './inverter.service';
import { InverterController } from './inverter.controller';

@Module({
  controllers: [InverterController],
  providers: [InverterService],
})
export class InverterModule {}
