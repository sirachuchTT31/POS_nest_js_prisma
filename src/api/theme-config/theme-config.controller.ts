import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UnauthorizedException, Res } from '@nestjs/common';
import { ThemeConfigService } from './theme-config.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseResultObject } from 'src/shared/interface/baseResult.model';
import express, { Request, Response } from 'express';
import { CreatethemeconfigDto } from './dto/create-theme-config.dto';

@Controller('theme-config')
@ApiTags('theme-config')
export class ThemeConfigController {
  constructor(private readonly themeConfigService: ThemeConfigService) { }

  @Post('create')
  async create(@Body() createthemeconfigDTO: CreatethemeconfigDto, @Res() res: Response, exception: HttpException): Promise<BaseResultObject | any> {
    const themcodeRandom = 'theme-' + Date.now().toString(32) + '-' + Math.random().toString(10).replaceAll('.', '')
    const payload = {
      theme_code: themcodeRandom,
      bg_color: createthemeconfigDTO?.bg_color,
      logo: createthemeconfigDTO?.logo,
      userSettingId: createthemeconfigDTO?.userSettingId
    }
    let responseService = await this.themeConfigService.Createthemconfig(payload)
    if (responseService == true) {
      return res.status(200).json({
        status: true,
        status_code: HttpStatus.OK,
        message: exception?.message,
        result: null
      })
    }
    else {
      return res.status(500).json({
        status: false,
        status_code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: exception?.message,
        result: null
      })
    }
  }

  @Get(':id')
  async findOne(@Param() params: any, @Res() res: Response, exception: HttpException): Promise<BaseResultObject | any> {
    console.log(params)
  }
}
