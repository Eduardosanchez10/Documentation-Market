import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ManagerError } from 'src/common/errors/manager.error'; 
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new ManagerError({ type: 'UNAUTHORIZED', message: 'Unauthorized!' });
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      if (!payload.id) {
        throw new ManagerError({ type: 'UNAUTHORIZED', message: 'Invalid token!' });
      }

      const user = await this.usersService.findOne(payload.id);
      if (!user) {
        throw new ManagerError({ type: 'UNAUTHORIZED', message: 'Unauthorized!' });
      }

      request['user'] = payload;
    } catch (error) {
      throw new ManagerError({ type: 'UNAUTHORIZED', message: error.message });
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}