import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {
  }
  async create(data: Prisma.UsersCreateInput) {
    await this.prismaService.users.create({ data: data, })
  }
  findAll() {
    return `This action returns all user`;
  }

  async findOne(username: string) {
    return this.prismaService.users.findFirst({
      where: {
        username: username
      },
      select: {
        id: true, username: true, password: true
      }
    });
  }
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
