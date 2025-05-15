import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '../../../generated/prisma/client';

export class CreatePlantDto implements Prisma.PlantCreateInput {
  @ApiProperty({
    example: 'Amazon Jungle Plant',
    description: 'Name of the plant',
  })
  @IsString()
  @IsNotEmpty({ message: 'The plant name is mandatory' })
  name: string;

  @ApiProperty({
    example: 'Greenhouse 3 - Section B',
    description: 'Physical location of the plant',
  })
  @IsString()
  @IsNotEmpty({ message: 'The location is mandatory' })
  location: string;
}
