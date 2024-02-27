import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { UserModule } from 'src/api/user/user.module';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseModule],
})
export class DatabaseModule { }
