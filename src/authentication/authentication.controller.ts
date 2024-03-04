
import { AuthenticationService } from './authentication.service';
import { baseResult } from 'src/shared/interface/baseResult.model';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { env } from 'process';
import { RegisterUserDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
@ApiTags('authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private jwtService: JwtService,
  ) {
  }
  @Post('login')
  async Login(@Body() signinDto: SignInDto): Promise<baseResult> {
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
  async Register(@Body() registerDto: RegisterUserDto): Promise<baseResult> {
    const salt = 10
    const password = registerDto?.password
    const hashPassword = await bcrypt.hash(password, salt)
    const payloadData = {
      first_name: registerDto?.first_name,
      last_name: registerDto?.last_name,
      email: registerDto?.email,
      address: registerDto?.address,
      username: registerDto?.username,
      password: hashPassword
    }
    const responseService = await this.authenticationService.CreateUser(payloadData);
    if (responseService === false) {
      throw new HttpException(
        'Register fail',
        HttpStatus.BAD_REQUEST,
      );
    }
    else {
      return {
        result: null,
        status: true,
        status_code: 200,
        message: 'Registration successfully'
      }
    }
  }
}
