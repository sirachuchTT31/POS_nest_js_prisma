import { Injectable } from '@nestjs/common';
import { SignIn } from './dto/base-auth.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class AuthenticationService {
    constructor(
        private  dbService: DatabaseService) { }

    async FindoneUser(username: string): Promise<SignIn> {
        return await this.dbService?.users?.findFirst({ where: { username: username }, select: { id: true, username: true, password: true } })
        // FIXME:MOCKUP
        // return {
        //     id: '',
        //     username: '',
        //     password: ''
        // }
    }

    async CreateUser(UserCreateInputModel: Prisma.UsersCreateInput) {
        // let response = await this.dbService?.users?.create({
        //     data: {
        //         username: 'demo01',
        //         password: '1234',
        //         address: 'demo',
        //         email: 'demo@example.com',
        //         first_name: 'accountdemo',
        //         last_name: 'accountdemo',

        //     }
        // })
        let response
        if (response) {
            return true
        }
        else {
            return false
        }
    }
}
