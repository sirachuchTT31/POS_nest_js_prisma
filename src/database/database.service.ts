import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
    // private readonly PrismaClient = new PrismaClient()
    // constructor(private readonly prismaClient: PrismaClient) { }
    async onModuleInit() {
        await this.$connect()
    }
}
