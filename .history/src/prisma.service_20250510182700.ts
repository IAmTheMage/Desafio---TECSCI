
import { Injectable, OnModuleInit } from '@nestjs/common';
import {} from "@prisma/client"
 
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
