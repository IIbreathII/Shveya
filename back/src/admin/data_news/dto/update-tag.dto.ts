import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTagDto {
  @ApiPropertyOptional({ example: 'Новий український тег', description: 'Ім’я тега українською' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nameUk?: string;

  @ApiPropertyOptional({ example: 'NewTag', description: 'Ім’я тега англійською' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nameEn?: string;
}
