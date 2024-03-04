import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserSettingModule } from './api/user-setting/user-setting.module';

@Module({
  imports: [
    AuthenticationModule,
    UserModule,
    UserSettingModule
    // PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
