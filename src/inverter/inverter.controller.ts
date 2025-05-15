import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InverterService } from './inverter.service';
import { CreateInverterDto } from './dto/create-inverter.dto';
import { UpdateInverterDto } from './dto/update-inverter.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Inverter')
@Controller('inverter')
export class InverterController {
  constructor(private readonly inverterService: InverterService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new inverter' })
  @ApiBody({ type: CreateInverterDto })
  @ApiResponse({ status: 201, description: 'Inverter successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createInverterDto: CreateInverterDto) {
    return this.inverterService.create(createInverterDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all inverters' })
  @ApiResponse({
    status: 200,
    description: 'List of all inverters',
    isArray: true,
  })
  findAll() {
    return this.inverterService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single inverter by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Inverter ID' })
  @ApiResponse({ status: 200, description: 'Inverter found.' })
  @ApiResponse({ status: 404, description: 'Inverter not found.' })
  findOne(@Param('id') id: string) {
    return this.inverterService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an inverter by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Inverter ID' })
  @ApiBody({ type: UpdateInverterDto })
  @ApiResponse({ status: 200, description: 'Inverter updated successfully.' })
  @ApiResponse({ status: 404, description: 'Inverter not found.' })
  update(@Param('id') id: string, @Body() updateInverterDto: UpdateInverterDto) {
    return this.inverterService.update(+id, updateInverterDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an inverter by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Inverter ID' })
  @ApiResponse({ status: 200, description: 'Inverter deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Inverter not found.' })
  remove(@Param('id') id: string) {
    return this.inverterService.remove(+id);
  }
}
