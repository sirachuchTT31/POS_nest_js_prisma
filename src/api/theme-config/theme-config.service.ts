import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ThemeConfigService {
    constructor(private prismaService: PrismaService) { }

    async Createthemconfig(CreatethemeconfigDTO: Prisma.ThemeConfigCreateInput) {
        let response = await this.prismaService.themeConfig.create({
            data: CreatethemeconfigDTO
        }).then((value) => {
            return true
        }).catch((e) => {
            return e
        })
        return response
    }
}
