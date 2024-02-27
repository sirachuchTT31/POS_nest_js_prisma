import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
    // constructor(private readonly prismaClient: PrismaClient) { }
    async onModuleInit() {
        await this.$connect()
    }
}
