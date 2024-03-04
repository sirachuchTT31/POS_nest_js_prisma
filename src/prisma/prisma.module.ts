import { DynamicModule, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Module({
  providers: [PrismaService],
  exports: [PrismaModule]
})
export class PrismaModule {
  // static forRoot(): DynamicModule {
  //   return {
  //     module: PrismaModule,
  //     // exports: PrismaModule,
  //   };
  // }
}
