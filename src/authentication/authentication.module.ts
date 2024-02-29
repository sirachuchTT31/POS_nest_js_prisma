import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UserModule } from 'src/api/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    JwtModule.register(
      {
        global: true,
        secret: env.SECRET_KEY,
        signOptions: { expiresIn: '60s' },
      }
    ),

  ],
  exports: [AuthenticationModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule { }
