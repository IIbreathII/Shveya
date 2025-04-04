import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePartnerDto {
  @ApiPropertyOptional({ description: 'Шлях до логотипу партнера', example: 'uploads/partners/logo.png' })
  @IsString()
  @IsOptional()
  path: string; // Шлях до файлу

  @ApiPropertyOptional({ description: 'Посилання', example: 'uploads/partners/logo.png' })
  @IsString()
  @IsOptional()
  link: string; // Шлях до файлу
}
