import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  UseGuards
} from '@nestjs/common';
import { LinksService } from './medialink.service';
import { CreateMediaLinkDto } from './dto/create-medialink.dto';
import { UpdateMediaLinkDto } from './dto/update-medialink.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../../common/guard/JwtAuthGuard'; 


@ApiTags('Посилання')
@Controller(':lang/medialinks')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  @ApiOperation({ summary: 'Отримати всі посилання для вказаної мови' })
  @ApiParam({ name: 'lang', description: 'Мова (uk або en)', example: 'uk' })
  @ApiResponse({ status: 200, description: 'Посилання успішно отримані' })
  async getLinks(@Param('lang') lang: string) {
    return lang === 'en' ? this.linksService.getEnLinks() : this.linksService.getUkLinks();
  }

  @Get('all')
  @ApiOperation({ summary: 'Отримати всі посилання незалежно від мови' })
  @ApiResponse({ status: 200, description: 'Всі посилання успішно отримані' })
  async getAllLinks() {
    return this.linksService.getAllLinks(); // Отримати всі посилання без урахування мови
  }

  @Get(':id')
  @ApiOperation({ summary: 'Отримати посилання за ID' })
  @ApiParam({ name: 'lang', description: 'Мова (uk або en)', example: 'uk' })
  @ApiParam({ name: 'id', description: 'ID посилання', example: 1 })
  @ApiResponse({ status: 200, description: 'Посилання успішно отримано' })
  async getLinkById(@Param('id', ParseIntPipe) id: number, @Param('lang') lang: string) {
    return this.linksService.getLinkById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Створити нове посилання' })
  @ApiParam({ name: 'lang', description: 'Мова (uk або en)', example: 'uk' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateMediaLinkDto })
  @ApiResponse({ status: 201, description: 'Посилання успішно створено' })
  @UseInterceptors(AnyFilesInterceptor()) // Викликаємо інтерсептор
  async createLink(@Body() body: CreateMediaLinkDto) { // Додаємо @Body()
    console.log('Отримане тіло:', body);

    if (!body.title || !body.url) {
      throw new BadRequestException('Поля title та url є обов’язковими');
    }

    return this.linksService.createLink(body);
  }


  @Put(':id')
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({ summary: 'Оновити посилання за ID' })
  @ApiParam({ name: 'lang', description: 'Мова (uk або en)', example: 'uk' })
  @ApiParam({ name: 'id', description: 'ID посилання', example: 1 })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UpdateMediaLinkDto })
  @ApiResponse({ status: 200, description: 'Посилання успішно оновлено' })
  @UseInterceptors(AnyFilesInterceptor())
  async updateLink(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateMediaLinkDto) {
    console.log('Отримане тіло:', body);
  
    if (!body.title || !body.url) {
      throw new BadRequestException('Поля title та url є обов’язковими');
    }
  
    return this.linksService.updateLink(id, body);
  }
  

  @Delete(':id')
  @UseGuards(JwtAuthGuard) 
  @ApiOperation({ summary: 'Видалити посилання за ID' })
  @ApiParam({ name: 'lang', description: 'Мова (uk або en)', example: 'uk' })
  @ApiParam({ name: 'id', description: 'ID посилання', example: 1 })
  @ApiResponse({ status: 200, description: 'Посилання успішно видалено' })
  async deleteLink(@Param('id', ParseIntPipe) id: number) {
    await this.linksService.deleteLink(id);
    return { message: 'Посилання успішно видалено' };
  }
}
