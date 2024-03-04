import {
    CanActivate,
    ExecutionContext,
    Header,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { env } from 'process';
@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {

        const req = context.switchToHttp().getRequest()
        const token = this.extrackToken(req)
        if (token) {
            try {
                const payload = await this.jwtService.verifyAsync(
                    token,
                    {
                        secret: env.SECRET_KEY,
                    }
                )
                if (payload) {
                    return true
                }
            }
            catch (e) {
                throw new UnauthorizedException();
            }
        }
        else {
            throw new UnauthorizedException();
        }
    }
    //Get headers from header reuqest
    private extrackToken(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ')
        return type === 'Bearer' ? token : undefined
    }
}
