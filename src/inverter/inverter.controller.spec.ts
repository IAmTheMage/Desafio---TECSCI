import { Test, TestingModule } from '@nestjs/testing';
import { InverterController } from './inverter.controller';
import { InverterService } from './inverter.service';
import { PrismaService } from '../prisma.service'; // ajuste o caminho conforme necessário

describe('InverterController', () => {
  let controller: InverterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InverterController],
      providers: [
        InverterService,
        {
          provide: PrismaService,
          useValue: {}, // ou forneça um mock se necessário
        },
      ],
    }).compile();

    controller = module.get<InverterController>(InverterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
