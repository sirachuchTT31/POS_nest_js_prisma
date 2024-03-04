import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { SignIn } from './dto/base-auth.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthenticationService {
    constructor(private prismaService: PrismaService) { }
    async findOneUser(username: string): Promise<SignIn> {
        // FIXME: Check username is 0,1
        return await this.prismaService.users.findFirst({
            where: { username: username },
            select: {
                id: true, username: true, password: true
            }
        })

    }

    async CreateUser(UserCreateInputModel: Prisma.UsersCreateInput) {
        let response = await this.prismaService?.users?.create({
            data: UserCreateInputModel
        }).then((value) => {
            return true
        }).catch((e) => {
            throw e
            // return 
        })
        return response
    }
}
