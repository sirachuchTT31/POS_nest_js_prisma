
import { AuthenticationService } from './authentication.service';
import { BaseResultObject } from 'src/shared/interface/baseResult.model';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UnauthorizedException, Res } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { env } from 'process';
import { RegisterUserDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { UserSettingService } from 'src/api/user-setting/user-setting.service';
import { UserSettingController } from 'src/api/user-setting/user-setting.controller';
import express, { Request, Response } from 'express';
@ApiTags('authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private jwtService: JwtService,
    private usersettingController: UserSettingController
  ) {
  }
  @Post('login')
  async Login(@Body() signinDto: SignInDto): Promise<BaseResultObject> {
    const responseService = await this.authenticationService.findOneUser(signinDto?.username);
    //POST BODY REQUEST
    const textPassword = signinDto?.password
    //PASSWORD DATABASE
    const responsePassword = responseService?.password
    const isMatch = await bcrypt.compare(textPassword, responsePassword)
    if (isMatch == false) {
      //Thorow error nestjs@common , authentication failed
      throw new UnauthorizedException();
    }
    else {
      const payload = {
        sub: responseService?.id,
        username: responseService?.username,
      }
      let responseJWT = await this.jwtService.signAsync(payload)
      return {
        result: responseJWT,
        status: true,
        status_code: 200,
        message: 'Login successfully'
      }
    }
  }
  @Post('register')
  async Register(@Body() registerDto: RegisterUserDto, @Res() res: Response, exception: HttpException): Promise<BaseResultObject | any> {
    const salt = 10
    const password = registerDto?.password
    const hashPassword = await bcrypt.hash(password, salt)
    //CREATE GENNARATE AUTO setting_code
    const response = await this.usersettingController.create()
    const payloadData = {
      first_name: registerDto?.first_name,
      last_name: registerDto?.last_name,
      email: registerDto?.email,
      address: registerDto?.address,
      username: registerDto?.username,
      password: hashPassword,
      setting_id: response?.result
    }
    const responseService = await this.authenticationService.CreateUser(payloadData);
    if (responseService === true) {
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
}
