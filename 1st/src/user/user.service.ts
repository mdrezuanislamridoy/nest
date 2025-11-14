import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(private configService: ConfigService) {}

  users = [
    {
      id: 'a1',
      name: 'Bro',
    },
    {
      id: 'a2',
      name: 'Bro1',
    },
  ];

  getUser(id: string) {
    const user = this.users.find((user) => user.id === id);

    const appName = this.configService.get<string>('appName');
    return {
      message: `User fetched from ${appName}`,
      user,
    };
  }
}
