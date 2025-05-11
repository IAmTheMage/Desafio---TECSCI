import { Prisma } from '../../../generated/prisma/client';

export class CreatePlantDto implements Prisma.PlantCreateInput {
  name: string;
  capacity: number;
  location: string;
  // Adicione todos os campos necessários para o Prisma aqui
}