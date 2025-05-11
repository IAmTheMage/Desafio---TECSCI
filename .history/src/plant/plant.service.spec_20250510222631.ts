import { Test, TestingModule } from '@nestjs/testing';
import { PlantService } from './plant.service';
import { PrismaService } from '../prisma.service';
import { CreatePlantDto } from './dto/create-plant.dto';

describe('PlantService', () => {
  let service: PlantService;
  let prisma: PrismaService;  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantService, PrismaService],
    }).compile();

    service = module.get<PlantService>(PlantService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('create', async () => {
    const dto: CreatePlantDto = {
      name: 'Usina Solar 1',
      location: 'Localização X',
    };

    await service.create(dto)

    const latestPlant = await prisma.plant.findMany({
      orderBy: {
        'createdAt': 'desc'
      },
      take: 1
    })
    
    expect(latestPlant[0]).toHaveProperty('id');
    expect(latestPlant[0].name).toBe('Usina Solar 1')
    expect(latestPlant[0].location).toBe('Localização X')
  });
});
