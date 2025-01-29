import { 
  Controller, Get, Post, Put, Param, Body, Delete, 
  BadRequestException, NotFoundException, UseInterceptors, UploadedFile, 
  ParseIntPipe 
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-links.dto';
import { UpdateLinkDto } from './dto/update-links.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Посилання')
@Controller('medialinks')
export class LinksController {
  constructor(private readonly LinksService: LinksService) {}

  @Get()
  @ApiOperation({ summary: 'Отримати всі картки' })
  @ApiResponse({ status: 200, description: 'Картки успішно отримано' })
  async getAllLinks() {
    return this.LinksService.getAllLinks();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image')) // Обробка файлів
  @ApiOperation({ summary: 'Створити нову медиа линк' })
  @ApiResponse({ status: 201, description: 'медиа линк успішно створено' })
  async createLink(
    @Body() createLinkDto: CreateLinkDto, 
    @UploadedFile() image?: Express.Multer.File
  ) {
    if (!createLinkDto.path && !image) {
      throw new BadRequestException('Посилання на зображення є обов’язковим');
    }

    // Якщо файл завантажено, зберігаємо його шлях у DTO
    if (image) {
      createLinkDto.path = image.path; // Якщо файли зберігаються локально
      // createLinkDto.path = `https://your-storage.com/${image.filename}`; // Якщо файли зберігаються в хмарі
    }

    return this.LinksService.createLinks(createLinkDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Отримати медиа линк за ID' })
  @ApiParam({ name: 'id', description: 'ID картки', example: 1 })
  @ApiResponse({ status: 200, description: 'медиа линк успішно отримано' })
  async getLinkById(@Param('id', ParseIntPipe) id: number) {
    return this.LinksService.getLinksById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Оновити медиа линк за ID' })
  @ApiParam({ name: 'id', description: 'ID картки', example: 1 })
  @ApiResponse({ status: 200, description: 'медиа линк успішно оновлено' })
  async updateLink(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateLinkDto: UpdateLinkDto
  ) {
    return this.LinksService.updateLinks(id, updateLinkDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Видалити медиа линк за ID' })
  @ApiParam({ name: 'id', description: 'ID картки', example: 1 })
  @ApiResponse({ status: 200, description: 'медиа линк успішно видалено' })
  async deleteLink(@Param('id', ParseIntPipe) id: number) {
    await this.LinksService.deleteLinks(id);
    return { message: 'медиа линк успішно видалено' };
  }
}
