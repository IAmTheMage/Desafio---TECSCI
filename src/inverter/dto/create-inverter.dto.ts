import { IsString, IsNotEmpty, IsNumber, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInverterDto {
  @ApiProperty({
    example: 'SMA Sunny Tripower 15000TL',
    description: 'Model of the inverter',
  })
  @IsString()
  @IsNotEmpty({ message: 'The inverter model is mandatory' })
  model: string;

  @ApiProperty({
    example: 15.0,
    description: 'Capacity of the inverter in kilowatts',
  })
  @IsNumber()
  capacityKW: number;

  @ApiProperty({
    example: 1,
    description: 'ID of the plant the inverter belongs to',
  })
  @IsInt()
  @IsNotEmpty({ message: 'The plantId is mandatory' })
  plantId: number;
}
