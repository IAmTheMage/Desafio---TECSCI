import { Test, TestingModule } from '@nestjs/testing';
import { PlantService } from './plant.service';
import { PrismaService } from '../prisma.service';
import { CreatePlantDto } from './dto/create-plant.dto';

describe('PlantService', () => {
  let service: PlantService;
  let controller: PlantController;
  let prisma: PrismaService;  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantService],
    }).compile();

    service = module.get<PlantService>(PlantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
