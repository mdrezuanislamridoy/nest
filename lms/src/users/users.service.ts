import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(private configService: ConfigService) {}
  getUser(id: number): string {
    const appName = this.configService.get<string>('appName');
    return `This is user ${id} in ${appName}`;
  }

  createUser({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const user = {
      name,
      email,
      password,
    };

    return { user, message: 'User created' };
  }
}
