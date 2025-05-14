import { Controller, Get, Query } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('Metrics')
@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get('max-power-per-day')
  @ApiOperation({ summary: 'Get maximum power per day for an inverter' })
  @ApiQuery({ name: 'inversor_id', type: Number, description: 'Inverter ID', required: true })
  @ApiQuery({ name: 'data_inicio', type: String, description: 'Start date (YYYY-MM-DD)', required: true })
  @ApiQuery({ name: 'data_fim', type: String, description: 'End date (YYYY-MM-DD)', required: true })
  @ApiResponse({ status: 200, description: 'Maximum power data per day retrieved successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid parameters.' })
  async getMaxPowerPerDay(
    @Query('inversor_id') inverterId: string,
    @Query('data_inicio') startDate: string,
    @Query('data_fim') endDate: string,
  ) {
    const id = parseInt(inverterId, 10);
    return this.metricsService.getMaxPowerPerDay(id, startDate, endDate);
  }

  @Get('avg-temperature-per-day')
  @ApiOperation({ summary: 'Get average temperature per day for an inverter' })
  @ApiQuery({ name: 'inversor_id', type: Number, description: 'Inverter ID', required: true })
  @ApiQuery({ name: 'data_inicio', type: String, description: 'Start date (YYYY-MM-DD)', required: true })
  @ApiQuery({ name: 'data_fim', type: String, description: 'End date (YYYY-MM-DD)', required: true })
  @ApiResponse({ status: 200, description: 'Average temperature data per day retrieved successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid parameters.' })
  async getAverageTemperaturePerDay(
    @Query('inversor_id') inverterId: string,
    @Query('data_inicio') startDate: string,
    @Query('data_fim') endDate: string,
  ) {
    const id = parseInt(inverterId, 10);
    return this.metricsService.getAverageTemperaturePerDay(id, startDate, endDate);
  }

  @Get('plant-generation')
  @ApiOperation({ summary: 'Get total plant generation between dates' })
  @ApiQuery({ name: 'plant_id', type: Number, description: 'Plant ID', required: true })
  @ApiQuery({ name: 'data_inicio', type: String, description: 'Start date (YYYY-MM-DD)', required: true })
  @ApiQuery({ name: 'data_fim', type: String, description: 'End date (YYYY-MM-DD)', required: true })
  @ApiResponse({ status: 200, description: 'Plant generation data retrieved successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid parameters.' })
  async getPlantGeneration(
    @Query('plant_id') plantId: string,
    @Query('data_inicio') startDate: string,
    @Query('data_fim') endDate: string,
  ) {
    const id = parseInt(plantId, 10);
    return this.metricsService.getPlantGeneration(id, startDate, endDate);
  }

  @Get('inverter-generation')
  @ApiOperation({ summary: 'Get generation of an inverter between dates' })
  @ApiQuery({ name: 'plant_id', type: Number, description: 'Inverter ID', required: true })
  @ApiQuery({ name: 'data_inicio', type: String, description: 'Start date (YYYY-MM-DD)', required: true })
  @ApiQuery({ name: 'data_fim', type: String, description: 'End date (YYYY-MM-DD)', required: true })
  @ApiResponse({ status: 200, description: 'Inverter generation data retrieved successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid parameters.' })
  async getInverterGeneration(
    @Query('plant_id') inverterId: string,
    @Query('data_inicio') startDate: string,
    @Query('data_fim') endDate: string,
  ) {
    const id = parseInt(inverterId, 10);
    return this.metricsService.getPlantGeneration(id, startDate, endDate);
  }
}
