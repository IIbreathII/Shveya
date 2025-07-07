import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Query,
  Param,
  DefaultValuePipe,
  ParseIntPipe,
  ParseEnumPipe,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

export enum Lang {
  uk = 'uk',
  en = 'en',
}

@ApiTags('Новини')
@Controller(':lang/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiOperation({ summary: 'Створити нову новину' })
  @ApiBody({ type: CreateNewsDto })
  @ApiResponse({ status: 201, description: 'Новина створена', type: News })
  create(
    @Body() createNewsDto: CreateNewsDto,
  ): Promise<News> {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Отримати список новин з пагінацією' })
  @ApiParam({ name: 'lang', description: 'Мова (uk|en)', example: 'uk' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiResponse({ status: 200, description: 'Список новин' })
  findAll(
    @Param('lang', new ParseEnumPipe(Lang)) lang: Lang,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.newsService.findAllPaginated(page, limit, lang);
  }

  @Get('all/:id')
  async getAllNewsById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<News> {
    const news = await this.newsService.getAllNewsById(id);
    if (!news) {
      throw new NotFoundException(`News with id ${id} not found`);
    }
    return news;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Отримати новину за ID' })
  @ApiParam({ name: 'lang', description: 'Мова (uk|en)', example: 'uk' })
  @ApiParam({ name: 'id', description: 'ID новини', example: 1 })
  @ApiResponse({ status: 200, description: 'Новина за ID', type: News })
  findOne(
    @Param('lang', new ParseEnumPipe(Lang)) lang: Lang,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.newsService.findOne(id, lang);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Оновити новину за ID' })
  @ApiParam({ name: 'lang', description: 'Мова (uk|en)', example: 'uk' })
  @ApiParam({ name: 'id', description: 'ID новини', example: 1 })
  @ApiBody({ type: UpdateNewsDto })
  @ApiResponse({ status: 200, description: 'Новина оновлена', type: News })
  update(
    @Param('lang', new ParseEnumPipe(Lang)) lang: Lang,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNewsDto: UpdateNewsDto,
  ) {
    return this.newsService.update(id, updateNewsDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Видалити новину за ID' })
  @ApiParam({ name: 'lang', description: 'Мова (uk|en)', example: 'uk' })
  @ApiParam({ name: 'id', description: 'ID новини', example: 1 })
  @ApiResponse({ status: 200, description: 'Новина видалена' })
  remove(
    @Param('lang', new ParseEnumPipe(Lang)) lang: Lang,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.newsService.remove(id);
  }
}
