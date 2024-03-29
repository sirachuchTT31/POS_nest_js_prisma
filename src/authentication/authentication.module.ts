import { Module, forwardRef } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UserModule } from 'src/api/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSettingService } from 'src/api/user-setting/user-setting.service';
import { UserSettingController } from 'src/api/user-setting/user-setting.controller';

@Module({
  imports: [
    // DatabaseModule,
    PrismaModule,
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
  providers: [
    AuthenticationService,
    PrismaService,
    UserSettingService,
    UserSettingController
  ],
})
export class AuthenticationModule { }
