import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InverterService } from './inverter.service';
import { CreateInverterDto } from './dto/create-inverter.dto';
import { UpdateInverterDto } from './dto/update-inverter.dto';

@Controller('inverter')
export class InverterController {
  constructor(private readonly inverterService: InverterService) {}

  @Post()
  create(@Body() createInverterDto: CreateInverterDto) {
    return this.inverterService.create(createInverterDto);
  }

  @Get()
  findAll() {
    return this.inverterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inverterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInverterDto: UpdateInverterDto) {
    return this.inverterService.update(+id, updateInverterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inverterService.remove(+id);
  }
}
