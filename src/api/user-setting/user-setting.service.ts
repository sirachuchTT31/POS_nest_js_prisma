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

  async findAll() {
    let response = await this.prismaService.userSetting.findMany(
      {
        orderBy: {
          created_at: 'desc'
        }
      }
    ).then((value) => {
      return value
    }).catch((e) => {
      throw e
    })
    return response
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
