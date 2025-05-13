import { Injectable } from '@nestjs/common';
import { CreateInverterDto } from './dto/create-inverter.dto';
import { UpdateInverterDto } from './dto/update-inverter.dto';

@Injectable()
export class InverterService {
  create(createInverterDto: CreateInverterDto) {
    return 'This action adds a new inverter';
  }

  findAll() {
    return `This action returns all inverter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inverter`;
  }

  update(id: number, updateInverterDto: UpdateInverterDto) {
    return `This action updates a #${id} inverter`;
  }

  remove(id: number) {
    return `This action removes a #${id} inverter`;
  }
}
