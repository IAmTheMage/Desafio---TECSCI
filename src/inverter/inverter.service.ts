import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateInverterDto } from './dto/create-inverter.dto';
import { UpdateInverterDto } from './dto/update-inverter.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class InverterService {
  constructor(private prisma: PrismaService) {}

  async create(createInverterDto: CreateInverterDto) {
    const plant = await this.prisma.plant.findUnique({
      where: { id: createInverterDto.plantId },
    });

    if (!plant) {
      throw new BadRequestException(`Plant with ID ${createInverterDto.plantId} not found`);
    }

    const inverter = await this.prisma.inverter.create({
      data: {
        model: createInverterDto.model,
        capacityKW: createInverterDto.capacityKW,
        plant: {
          connect: { id: createInverterDto.plantId },
        },
      },
    });

    return inverter;
  }

  async findAll() {
    return await this.prisma.inverter.findMany({
      include: {
        plant: true,
      },
    });
  }

  async findOne(id: number) {
    const inverter = await this.prisma.inverter.findUnique({
      where: { id },
      include: { plant: true },
    });

    if (!inverter) {
      throw new NotFoundException(`Inverter with ID ${id} not found`);
    }

    return inverter;
  }

  async update(id: number, updateInverterDto: UpdateInverterDto) {
    const inverter = await this.prisma.inverter.findUnique({
      where: { id },
    });

    if (!inverter) {
      throw new NotFoundException(`Inverter with ID ${id} not found`);
    }

    // Se plantId for fornecido, verificar se a planta existe
    if (updateInverterDto.plantId) {
      const plant = await this.prisma.plant.findUnique({
        where: { id: updateInverterDto.plantId },
      });

      if (!plant) {
        throw new BadRequestException(`Plant with ID ${updateInverterDto.plantId} not found`);
      }
    }

    const updatedInverter = await this.prisma.inverter.update({
      where: { id },
      data: {
        model: updateInverterDto.model,
        capacityKW: updateInverterDto.capacityKW,
        plant: updateInverterDto.plantId
          ? {
              connect: { id: updateInverterDto.plantId },
            }
          : undefined,
      },
    });

    return updatedInverter;
  }

  async remove(id: number) {
    const inverter = await this.prisma.inverter.findUnique({
      where: { id },
    });

    if (!inverter) {
      throw new NotFoundException(`Inverter with ID ${id} not found`);
    }

    await this.prisma.inverter.delete({
      where: { id },
    });

    return { message: `Inverter with ID ${id} deleted successfully` };
  }
}
