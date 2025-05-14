import { Test, TestingModule } from '@nestjs/testing';
import { PlantController } from './plant.controller';
import { PlantService } from './plant.service';
import { PrismaService } from '../prisma.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';

describe('PlantController', () => {
  let controller: PlantController;
  let service: PlantService;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantController],
      providers: [
        { provide: PlantService, useValue: mockService },
        PrismaService, // necessário apenas se o PlantService usasse diretamente sem mock
      ],
    }).compile();

    controller = module.get<PlantController>(PlantController);
    service = module.get<PlantService>(PlantService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('deve criar uma nova planta com sucesso', async () => {
      const dto: CreatePlantDto = { name: 'Usina Solar 1', location: 'Local A' };
      mockService.create.mockResolvedValue(true);

      const result = await controller.create(dto);
      expect(result).toBe(true);
      expect(mockService.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('deve retornar uma lista de plantas', async () => {
      const plants = [
        { id: 1, name: 'Usina A', location: 'Loc A' },
        { id: 2, name: 'Usina B', location: 'Loc B' },
      ];
      mockService.findAll.mockResolvedValue(plants);

      const result = await controller.findAll();
      expect(result).toEqual(plants);
    });
  });

  describe('findOne', () => {
    it('deve retornar uma planta existente', async () => {
      const plant = { id: 1, name: 'Usina X', location: 'Loc X' };
      mockService.findOne.mockResolvedValue(plant);

      const result = await controller.findOne('1');
      expect(result).toEqual(plant);
    });

    it('deve retornar null se planta não for encontrada', async () => {
      mockService.findOne.mockResolvedValue(null);

      const result = await controller.findOne('999');
      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('deve atualizar planta existente com sucesso', async () => {
      const dto: UpdatePlantDto = { name: 'Atualizada', location: 'Novo Local' };
      const updatedPlant = { id: 1, ...dto };
      mockService.update.mockResolvedValue(updatedPlant);

      const result = await controller.update('1', dto);
      expect(result).toEqual(updatedPlant);
      expect(mockService.update).toHaveBeenCalledWith(1, dto);
    });

    it('deve lançar erro se a planta não for encontrada', async () => {
      const dto: UpdatePlantDto = { name: 'Novo Nome', location: 'Novo Local' };
      mockService.update.mockImplementation(() => {
        throw new Error('Plant not found');
      });
    
      try {
        await controller.update('999', dto);
        fail('Era esperado um erro, mas nenhum foi lançado');
      } catch (err) {
        // A mensagem está correta, então o teste passa.
        expect(err.message).toContain('Plant not found');
      }
    });
  });

  describe('remove', () => {
    it('deve remover planta com sucesso', async () => {
      mockService.remove.mockResolvedValue(true);

      const result = await controller.remove('1');
      expect(result).toBe(true);
      expect(mockService.remove).toHaveBeenCalledWith(1);
    });

    it('deve lançar erro ao tentar remover planta inexistente', async () => {
      mockService.remove.mockImplementation(() => {
        throw new Error('Plant not found');
      });
    
      try {
        await controller.remove('999');
        fail('Era esperado um erro, mas nenhum foi lançado');
      } catch (err) {
        // A mensagem está correta, então o teste passa.
        expect(err.message).toContain('Plant not found');
      }
    });
    
  });
});
