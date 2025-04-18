import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthGoogleService } from './authGoogle.service';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import ms from 'ms';
import { log } from 'console';

@Controller('auth/google')
export class AuthGoogleController {
  constructor(
    private authService: AuthGoogleService,
    private configService: ConfigService
  ) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    // Автоматический редирект на Google OAuth
  }

  @Get('callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    if (!req.user) {
      return res.status(400).json({ message: 'Google authentication failed' });
    }

    const token = await this.authService.generateJwt(req.user);
    const client = this.configService.get<string>('client.client') || 'client32';
    const maxage = ms(this.configService.get<string>('jwt.expiresIn', '1h')); 

  

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      path: '/',
      maxAge: maxage, 
    });

    return res.redirect(`${client}/auth/callback?logged=${true}`);
  }
}