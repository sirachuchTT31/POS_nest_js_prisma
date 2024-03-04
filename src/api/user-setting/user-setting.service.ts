import { Injectable } from '@nestjs/common';
import { CreateUserSettingDto } from './dto/create-user-setting.dto';
import { UpdateUserSettingDto } from './dto/update-user-setting.dto';

import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()

export class UserSettingService {
  constructor(private prismaService: PrismaService) { }

  async create(createUserSettingDto: Prisma.UserSettingCreateInput) {
    let response = await this.prismaService.userSetting.create({
      data: createUserSettingDto
    }).then((value) => {
      return true
    }).catch((e) => {
      throw e
    })
    return response
  }

  findAll() {
    return `This action returns all userSetting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userSetting`;
  }

  update(id: number, updateUserSettingDto: UpdateUserSettingDto) {
    return `This action updates a #${id} userSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} userSetting`;
  }
}
