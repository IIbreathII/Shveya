import {
  IsArray,
  IsString,
  IsNotEmpty,
  IsDateString,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiExtraModels, getSchemaPath } from '@nestjs/swagger';
import { ImageBlockDto, ParagraphBlockDto } from './content-block.dto';

export type ContentBlockDto = ImageBlockDto | ParagraphBlockDto;

@ApiExtraModels(ImageBlockDto, ParagraphBlockDto)
export class TagUkDto {
  @ApiProperty({ example: 'Політика', description: 'Тег українською' })
  @IsString()
  @IsNotEmpty()
  nameUk: string;

  @ApiProperty({
    example: 'Politics',
    description: 'Переклад англійською',
    required: false,
  })
  @IsOptional()
  @IsString()
  nameEn?: string;
}

@ApiExtraModels(ImageBlockDto, ParagraphBlockDto)
export class TagEnDto {
  @ApiProperty({ example: 'Volunteering', description: 'Tag in English' })
  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @ApiProperty({
    example: 'Волонтерство',
    description: 'Переклад українською',
    required: false,
  })
  @IsOptional()
  @IsString()
  nameUk?: string;
}

@ApiExtraModels(ImageBlockDto, ParagraphBlockDto, TagUkDto, TagEnDto)
export class CreateNewsDto {
  @ApiProperty({
    type: [TagUkDto],
    description: 'Список тегів українською (обов’язково nameUk)',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TagUkDto)
  tagsUk: TagUkDto[];

  @ApiProperty({
    type: [TagEnDto],
    description: 'Список тегів англійською (обов’язково nameEn)',
    required: false,
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TagEnDto)
  tagsEn?: TagEnDto[];

  @ApiProperty({
    example: 'Передано бронежилети до зони бойових дій',
    description: 'Заголовок українською',
  })
  @IsString()
  @IsNotEmpty()
  titleUk: string;

  @ApiProperty({
    example: 'Body armor delivered to combat zone',
    description: 'Заголовок англійською',
    required: false,
  })
  @IsOptional()
  @IsString()
  titleEn?: string;

  @ApiProperty({
    type: String,
    format: 'date-time',
    example: '2025-06-01T00:00:00Z',
    description: 'Дата створення',
  })
  @IsDateString()
  createdAt: string;

  @ApiProperty({
    description: 'Контент українською (зображення та абзаци)',
    type: 'array',
    items: {
      oneOf: [
        { $ref: getSchemaPath(ImageBlockDto) },
        { $ref: getSchemaPath(ParagraphBlockDto) },
      ],
    },
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Object, {
    discriminator: {
      property: 'type',
      subTypes: [
        { name: 'image', value: ImageBlockDto },
        { name: 'paragraph', value: ParagraphBlockDto },
      ],
    },
    keepDiscriminatorProperty: true,
  })
  contentUk: ContentBlockDto[];

  @ApiProperty({
    description: 'Контент англійською (зображення та абзаци)',
    type: 'array',
    items: {
      oneOf: [
        { $ref: getSchemaPath(ImageBlockDto) },
        { $ref: getSchemaPath(ParagraphBlockDto) },
      ],
    },
    required: false,
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Object, {
    discriminator: {
      property: 'type',
      subTypes: [
        { name: 'image', value: ImageBlockDto },
        { name: 'paragraph', value: ParagraphBlockDto },
      ],
    },
    keepDiscriminatorProperty: true,
  })
  contentEn?: ContentBlockDto[];
}
