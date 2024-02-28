import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UserModule } from 'src/api/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/shared/constants/jwt.config';

@Module({
  imports: [UserModule,
    JwtModule.register(
      {
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }
    )
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule { }
