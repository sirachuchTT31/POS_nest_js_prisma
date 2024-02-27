import { Injectable } from '@nestjs/common';
// import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class UserService {
  // constructor(private readonly databaseService: DatabaseService) {
  // }
  async create(data: Prisma.UsersCreateInput) {
    // await this.databaseService.users.create({ data: data, })
  }
  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
