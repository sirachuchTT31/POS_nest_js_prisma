import { Module } from '@nestjs/common';
import { ThemeConfigService } from './theme-config.service';
import { ThemeConfigController } from './theme-config.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ThemeConfigController],
  providers: [
    ThemeConfigService,
    PrismaService
  ],
})
export class ThemeConfigModule { }
