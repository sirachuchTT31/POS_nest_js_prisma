import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService,PrismaService],
  imports: [PrismaModule],
  exports: [UserModule]
})
export class UserModule {

}
