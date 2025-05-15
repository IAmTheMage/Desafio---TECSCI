import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '../../../generated/prisma/client';

export class UpdatePlantDto implements Prisma.PlantUpdateInput {
  @ApiProperty({
    example: 'Desert Cactus',
    description: 'Updated plant name',
    required: false,
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Outdoor Area - Zone A',
    description: 'Updated plant location',
    required: false,
  })
  @IsString()
  location: string;
}
