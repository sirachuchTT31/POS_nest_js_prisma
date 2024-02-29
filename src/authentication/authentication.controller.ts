
import { AuthenticationService } from './authentication.service';
import { baseResult } from 'src/shared/interface/baseResult.model';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { env } from 'process';
import { CreateUserDto } from 'src/api/user/dto/create-user.dto';
@Controller('authentication')
@ApiTags('authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private jwtService: JwtService,
    // private httpException: HttpException,
    // private httpStatus: HttpStatus
  ) {
  }

  @Post()
  async signIn(@Body() signinDto: SignInDto): Promise<baseResult> {
    // const responseService = await this.authenticationService.FindoneUser(signinDto?.username);
    // if (responseService?.password !== signinDto?.password) {
    //   throw new HttpException(
    //     'Login failed',
    //     HttpStatus.UNAUTHORIZED,
    //   );
    // }
    // else {
    //   const payload = {
    //     sub: responseService?.id,
    //     username: responseService?.username,
    //   }
    //   let responseJWT = await this.jwtService.signAsync(payload)
    //   return {
    //     result: responseJWT,
    //     status: true,
    //     status_code: 200,
    //     message: 'Login successful'
    //   }
    // }
    // FIXME:MOCK DATA
    return {
      result: '',
      status: true,
      status_code: 200,
      message: 'Login successful'
    }
  }
  async Register(@Body() createUserDto: CreateUserDto): Promise<baseResult> {
    // const responseService = await this.authenticationService.CreateUser(createUserDto);
    // if (responseService === false) {
    //   throw new HttpException(
    //     'Login failed',
    //     HttpStatus.UNAUTHORIZED,
    //   );
    // }
    // else {
    //   return {
    //     result: null,
    //     status: true,
    //     status_code: 200,
    //     message: 'Registration successful'
    //   }
    // }
    // FIXME:MOCK DATA
    return {
      result: '',
      status: true,
      status_code: 200,
      message: 'Login successful'
    }
  }
}
