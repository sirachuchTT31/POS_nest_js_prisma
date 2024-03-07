import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserSettingModule } from './api/user-setting/user-setting.module';
import { ThemeConfigModule } from './api/theme-config/theme-config.module';

@Module({
  imports: [
    AuthenticationModule,
    UserModule,
    UserSettingModule,
    ThemeConfigModule
    // PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
