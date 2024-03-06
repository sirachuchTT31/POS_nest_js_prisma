import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, HttpCode, Res } from '@nestjs/common';
import { UserSettingService } from './user-setting.service';
import { CreateUserSettingDto } from './dto/create-user-setting.dto';
import { UpdateUserSettingDto } from './dto/update-user-setting.dto';
import { ApiTags } from '@nestjs/swagger';
import express, { Request, Response } from 'express';
import { BaseResultCollection, BaseResultObject } from 'src/shared/interface/baseResult.model';

@Controller('user-setting')
@ApiTags('user-setting')
export class UserSettingController {
  constructor(private readonly userSettingService: UserSettingService) { }

  @Post('create')
  //exception MESSAGE ERROR
  async create(): Promise<BaseResultObject | any> {
    const genarateSettingCode = 'setting-' + Date.now().toString(32) + '-' + Math.random().toString(10).replaceAll('.', '')
    const payload = {
      setting_code: genarateSettingCode
    }
    let responseService = await this.userSettingService.create(payload);
    if (responseService == true) {
      return {
        status: true,
        status_code: HttpStatus.OK,
        message: '',
        result: payload?.setting_code
      }
    }
    else {
      return {
        status: false,
        status_code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: '',
        result: null
      }
    }
  }

  @Get()
  async findAll(@Res() res: Response, exception: HttpException): Promise<BaseResultCollection | any> {
    let responseService = await this.userSettingService.findAll();
    if (responseService) {
      return res.status(200).json({
        status: true,
        status_code: HttpStatus.OK,
        message: exception?.message,
        results: responseService
      })
    }
    else {
      return res.status(500).json({
        status: false,
        status_code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: exception?.message,
        results: null
      })
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSettingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserSettingDto: UpdateUserSettingDto) {
    return this.userSettingService.update(+id, updateUserSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSettingService.remove(+id);
  }
}
