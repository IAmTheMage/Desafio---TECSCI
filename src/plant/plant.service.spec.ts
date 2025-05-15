import { Test, TestingModule } from '@nestjs/testing';
import { PlantService } from './plant.service';
import { PrismaService } from '../prisma.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';

describe('PlantService', () => {
  let service: PlantService;
  let prisma: PrismaService;  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantService, PrismaService],
    }).compile();

    service = module.get<PlantService>(PlantService);
    prisma = module.get<PrismaService>(PrismaService);
    await prisma.$connect();
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

  it('find_many', async () => {

    const countBefore = await prisma.plant.count()
    const plantsData: CreatePlantDto[] = [
      { name: 'Usina Solar 1', location: 'Localização X' },
      { name: 'Usina Solar 2', location: 'Localização Y' },
      { name: 'Usina Solar 3', location: 'Localização Z' },
      { name: 'Usina Solar 4', location: 'Localização W' },
      { name: 'Usina Solar 5', location: 'Localização V' },
    ];
    
    await prisma.plant.createMany({
      data: plantsData,
    });

    const plants = await service.findAll();

    const countNow = await prisma.plant.count()
    //const formattedPlants = plants.map(({ name, location }) => ({ name, location }));
    expect(countNow).toBeGreaterThanOrEqual(countBefore + plantsData.length);

  });

  it('find_unique', async () => {
    const plantsData: CreatePlantDto[] = [
      { name: 'Usina Solar 1', location: 'Localização X' },
      { name: 'Usina Solar 2', location: 'Localização Y' },
      { name: 'Usina Solar 3', location: 'Localização Z' },
      { name: 'Usina Solar 4', location: 'Localização W' },
      { name: 'Usina Solar 5', location: 'Localização V' },
    ];
    
    const createdPlants = await Promise.all(
      plantsData.map(data => prisma.plant.create({ data }))
    );

    const id3 = createdPlants[2].id;

    const plant3 = await service.findOne(id3)

    expect(plant3?.name).toBe('Usina Solar 3')
  })

  it('update', async () => {
    const plantsData: CreatePlantDto[] = [
      { name: 'Usina Solar 1', location: 'Localização X' },
      { name: 'Usina Solar 2', location: 'Localização Y' },
      { name: 'Usina Solar 3', location: 'Localização Z' },
      { name: 'Usina Solar 4', location: 'Localização W' },
      { name: 'Usina Solar 5', location: 'Localização V' },
    ];
    
    const createdPlants = await Promise.all(
      plantsData.map(data => prisma.plant.create({ data }))
    );

    const id2 = createdPlants[1].id;

    const updateData: UpdatePlantDto = {
      name: "Usina solar 60", location: ''
    }

    await service.update(id2, updateData)

    const plant = await service.findOne(id2)

    expect(plant?.name).toBe('Usina solar 60')
    expect(plant?.location).toBe("Localização Y")
  })

  it('delete', async () => {
    const plantsData: CreatePlantDto[] = [
      { name: 'Usina Solar 1', location: 'Localização X' },
      { name: 'Usina Solar 2', location: 'Localização Y' },
      { name: 'Usina Solar 3', location: 'Localização Z' },
      { name: 'Usina Solar 4', location: 'Localização W' },
      { name: 'Usina Solar 5', location: 'Localização V' },
    ];
    
    await prisma.plant.createMany({
      data: plantsData
    })

    const count = await prisma.plant.count()

    const latestPlant = await prisma.plant.findMany({
      orderBy: {
        'createdAt': 'desc'
      },
      take: 1
    })

    const id = latestPlant[0].id;

    await service.remove(id)

    const countAfterDeletion = await prisma.plant.count()

    expect(countAfterDeletion).toBe(count - 1)
  })
  
});
