import { Test, TestingModule } from '@nestjs/testing';
import { InverterService } from './inverter.service';
import { PrismaService } from '../prisma.service'; // ajuste o caminho conforme sua estrutura

describe('InverterService', () => {
  let service: InverterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InverterService,
        {
          provide: PrismaService,
          useValue: {}, // mock vazio ou com funções específicas se necessário
        },
      ],
    }).compile();

    service = module.get<InverterService>(InverterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
