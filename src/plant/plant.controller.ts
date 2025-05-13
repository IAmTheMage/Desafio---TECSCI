import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlantService } from './plant.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Plant')
@Controller('plant')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new plant' })
  @ApiBody({ type: CreatePlantDto })
  @ApiResponse({ status: 201, description: 'Plant successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createPlantDto: CreatePlantDto) {
    return this.plantService.create(createPlantDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all plants' })
  @ApiResponse({
    status: 200,
    description: 'List of all plants',
    isArray: true,
  })
  findAll() {
    return this.plantService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single plant by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Plant ID' })
  @ApiResponse({ status: 200, description: 'Plant found.' })
  @ApiResponse({ status: 404, description: 'Plant not found.' })
  findOne(@Param('id') id: string) {
    return this.plantService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a plant by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Plant ID' })
  @ApiBody({ type: UpdatePlantDto })
  @ApiResponse({ status: 200, description: 'Plant updated successfully.' })
  @ApiResponse({ status: 404, description: 'Plant not found.' })
  update(@Param('id') id: string, @Body() updatePlantDto: UpdatePlantDto) {
    return this.plantService.update(+id, updatePlantDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a plant by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Plant ID' })
  @ApiResponse({ status: 200, description: 'Plant deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Plant not found.' })
  remove(@Param('id') id: string) {
    return this.plantService.remove(+id);
  }
}
