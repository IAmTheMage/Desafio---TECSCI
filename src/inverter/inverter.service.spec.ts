import { Test, TestingModule } from '@nestjs/testing';
import { InverterService } from './inverter.service';
import { PrismaService } from '../prisma.service';
import { CreateInverterDto } from './dto/create-inverter.dto';
import { UpdateInverterDto } from './dto/update-inverter.dto';

describe('InverterService', () => {
  let service: InverterService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InverterService, PrismaService],
    }).compile();

    service = module.get<InverterService>(InverterService);
    prisma = module.get<PrismaService>(PrismaService);
    await prisma.$connect();
  });


  it('create', async () => {
    const plant = await prisma.plant.create({
      data: { name: "Usina A", location: "Location A" }
    });

    const inverterData: CreateInverterDto = {
      capacityKW: 500,
      model: "Model-X",
      plantId: plant.id
    };

    const created = await service.create(inverterData);

    expect(created).toHaveProperty('id');
    expect(created.capacityKW).toBe(500);
    expect(created.model).toBe('Model-X');
    expect(created.plantId).toBe(plant.id);
  });

  it('findAll', async () => {
    const plant = await prisma.plant.create({
      data: { name: "Usina B", location: "Location B" }
    });

    const invertersData: CreateInverterDto[] = [
      { capacityKW: 300, model: 'INV-A', plantId: plant.id },
      { capacityKW: 400, model: 'INV-B', plantId: plant.id },
    ];

    await prisma.inverter.createMany({ data: invertersData });

    const inverters = await service.findAll();
    expect(inverters.length).toBeGreaterThanOrEqual(2);
  });

  it('findOne', async () => {
    const plant = await prisma.plant.create({
      data: { name: "Usina C", location: "Location C" }
    });

    const inverter = await prisma.inverter.create({
      data: { capacityKW: 250, model: 'INV-C', plantId: plant.id }
    });

    const found = await service.findOne(inverter.id);
    expect(found?.id).toBe(inverter.id);
    expect(found?.model).toBe('INV-C');
  });

  it('update', async () => {
    const plant = await prisma.plant.create({
      data: { name: "Usina D", location: "Location D" }
    });

    const inverter = await prisma.inverter.create({
      data: { capacityKW: 200, model: 'INV-OLD', plantId: plant.id }
    });

    const updateData: UpdateInverterDto = {
      capacityKW: 350,
      model: 'INV-NEW'
    };

    await service.update(inverter.id, updateData);
    const updated = await prisma.inverter.findUnique({ where: { id: inverter.id } });

    expect(updated?.capacityKW).toBe(350);
    expect(updated?.model).toBe('INV-NEW');
  });

  it('remove', async () => {
    const plant = await prisma.plant.create({
      data: { name: "Usina E", location: "Location E" }
    });

    const inverter = await prisma.inverter.create({
      data: { capacityKW: 100, model: 'INV-DEL', plantId: plant.id }
    });

    const countBefore = await prisma.inverter.count();

    await service.remove(inverter.id);

    const countAfter = await prisma.inverter.count();
    expect(countAfter).toBe(countBefore - 1);
  });
});
