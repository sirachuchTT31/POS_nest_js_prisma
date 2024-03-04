import { Module } from '@nestjs/common';
import { UserSettingService } from './user-setting.service';
import { UserSettingController } from './user-setting.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UserSettingController],
  providers: [
    UserSettingService,
    PrismaService
  ],
  imports: [PrismaModule,]
})
export class UserSettingModule { }
