import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '../../../generated/prisma/client';

export class UpdateInverterDto implements Prisma.InverterUpdateInput {
  @ApiProperty({
    example: 'Huawei SUN2000-10KTL',
    description: 'Updated model of the inverter',
    required: false,
  })
  @IsOptional()
  @IsString()
  model?: string;

  @ApiProperty({
    example: 10.0,
    description: 'Updated capacity in kilowatts',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  capacityKW?: number;

  @ApiProperty({
    example: 2,
    description: 'Updated plant ID if the inverter is reassigned',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  plantId?: number;
}
