import { Test, TestingModule } from '@nestjs/testing';
import { PlantController } from './plant.controller';
import { PlantService } from './plant.service';
import { PrismaService } from '../prisma.service';
import { CreatePlantDto } from './dto/create-plant.dto';

describe('PlantController', () => {
  let controller: PlantController;
  let service: PlantService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantController],
      providers: [PlantService, PrismaService],
    }).compile();

    controller = module.get<PlantController>(PlantController);
    service = module.get<PlantService>(PlantService);
    prisma = module.get<PrismaService>(PrismaService);

    await prisma.$connect();
    await prisma.plant.deleteMany(); // limpa a tabela antes dos testes
  });

  afterAll(async () => {
    await prisma.plant.deleteMany(); // limpa a tabela após os testes
    await prisma.$disconnect();
  });

  describe('create', () => {
    it('deve criar uma nova planta', async () => {
      const dto: CreatePlantDto = {
        name: 'Usina Solar 1',
        location: 'Localização X',
      };

      const plant = await controller.create(dto);

      const lates_plant = await prisma.plant.findMany({
        orderBy: {
          'createdAt': 'desc'
        }
      })
    });
  });
});
