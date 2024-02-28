
import { AuthenticationService } from './authentication.service';
import { baseResult } from 'src/shared/interface/baseResult.model';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
@Controller('authentication')
@ApiTags('authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private  jwtService: JwtService
  ) {
  }

  @Post()
  async signIn(@Body() signinDto: SignInDto): Promise<baseResult> {
    const response = await this.authenticationService.findOne(signinDto?.userName);
    if (response?.passWord !== signinDto?.passWord) {
      return {
        status: false,
        status_code: 400,
        message: 'error',
        result: null
      }
    }
    else {
      const payload = {
          sub: response?.userId,
          username: response?.userName,
      }
      return {
        status: true,
        status_code: 200,
        message: 'success',
        result: await this.jwtService.signAsync(payload)
    }
    }
  }
}
