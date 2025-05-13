import { Injectable } from '@nestjs/common';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '../../generated/prisma/client';

@Injectable()
export class PlantService {
  constructor(private prisma: PrismaService) {}

  async create(createPlantDto: CreatePlantDto) {
    const plant = await this.prisma.plant.create({
      data: createPlantDto
    })

    return true
  }

  async findAll() {
    return await this.prisma.plant.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.plant.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updatePlantDto: UpdatePlantDto) {
    const currentPlant = await this.prisma.plant.findUnique({
      where: { id },
    });

    if (!currentPlant) {
      throw new Error('Plant not found');
    }
    const updatedData: Prisma.PlantUpdateInput = {};
    updatedData.name = updatePlantDto.name || currentPlant.name;
    updatedData.location = updatePlantDto.location || currentPlant.location;

    const updatedPlant = await this.prisma.plant.update({
      where: { id },
      data: updatedData,
    });

    return updatedPlant;
  }

  async remove(id: number) {
    const deleted = await this.prisma.plant.delete({
      where: {
        id
      }
    })

    return true;
  }
}

