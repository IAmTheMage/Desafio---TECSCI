import { Injectable } from '@nestjs/common';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PlantService {
  constructor(private prisma: PrismaService) {}

  async create(createPlantDto: CreatePlantDto) {
    const plant = await this.prisma.plant.create({
      data: createPlantDto
    })

    return true
  }

  findAll() {
    return await this.prisma.plant.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} plant`;
  }

  update(id: number, updatePlantDto: UpdatePlantDto) {
    return `This action updates a #${id} plant`;
  }

  remove(id: number) {
    return `This action removes a #${id} plant`;
  }
}

