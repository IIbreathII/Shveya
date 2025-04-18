import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import ms from 'ms';


@Injectable()
export class AuthUserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
    private configService: ConfigService, 
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersRepository.findOneBy({ username });

    if (!user || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return { username: user.username };
  }

  async login(username: string, password: string, res: Response): Promise<void> {
    const validUser = await this.validateUser(username, password);
    if (!validUser) {
        throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: validUser.username };
    const authToken = this.jwtService.sign(payload);
    const domain = this.configService.get<string>('client.domain') || 'localhost';
    const maxage = ms(this.configService.get<string>('jwt.expiresIn') || '1h'); 

    res.cookie('auth_token', authToken, {
      httpOnly: true,      // Доступ только серверу, защищает от XSS-атак
      secure: true,        // Только по HTTPS
      sameSite: 'none',    // Позволяет отправлять куки с разных доменов
      maxAge: maxage,  // 7 дней
  });
  
  
    res.send({ message: 'Success' });
}

  

  async updateUser(currentUsername: string, newUsername: string, password: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { username: currentUsername } });

    if (!user) {
        throw new Error('User not found');
    }

    // Удаляем старую запись
    await this.usersRepository.remove(user);

    // Создаем нового пользователя с обновленными данными
    const newUser = this.usersRepository.create({
        username: newUsername,
        password: await bcrypt.hash(password, 10),
    });

    return await this.usersRepository.save(newUser);
  }
}
