import { Injectable } from '@nestjs/common';
import { BaseAuth } from './dto/base-auth.dto';

@Injectable()
export class AuthenticationService {
    constructor() { }
    public mock_data_user: Array<BaseAuth> = [
        {
            userId: '01',
            userName: 'John',
            passWord: '1234'
        },
        {
            userId: '02',
            userName: 'Jame',
            passWord: '1234'
        }
    ]
    async findOne(userName: string): Promise<BaseAuth> {
        return this.mock_data_user.find((rs: any) => rs?.userName === userName)
    }
}
