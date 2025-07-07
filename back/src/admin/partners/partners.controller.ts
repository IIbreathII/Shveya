import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Param,
  Body,
  Delete,
  UseInterceptors,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { ReorderPartnersDto } from './dto/reorder-partner.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guard/JwtAuthGuard';

@ApiTags('Партнери')
@Controller(':lang/partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Get()
  @ApiOperation({ summary: 'Отримати всіх партнерів' })
  @ApiParam({
    name: 'lang',
    description: 'Мова відповіді (uk або en)',
    example: 'uk',
  })
  @ApiResponse({
    status: 200,
    description: 'Список партнерів успішно отримано',
  })
  async getAllPartners() {
    return this.partnersService.getAllPartners();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Створити нового партнера' })
  @ApiParam({
    name: 'lang',
    description: 'Мова відповіді (uk або en)',
    example: 'uk',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Дані для створення партнера',
    type: CreatePartnerDto,
  })
  @ApiResponse({ status: 201, description: 'Партнера успішно створено' })
  @UseInterceptors(AnyFilesInterceptor())
  async createPartner(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnersService.createPartner(createPartnerDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Отримати партнера за ID' })
  @ApiParam({
    name: 'lang',
    description: 'Мова відповіді (uk або en)',
    example: 'uk',
  })
  @ApiParam({ name: 'id', description: 'Ідентифікатор партнера', example: 1 })
  @ApiResponse({ status: 200, description: 'Партнера успішно отримано' })
  async getPartnerById(@Param('id', ParseIntPipe) id: number) {
    return this.partnersService.getPartnerById(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Оновити партнера за ID' })
  @ApiParam({
    name: 'lang',
    description: 'Мова відповіді (uk або en)',
    example: 'uk',
  })
  @ApiParam({ name: 'id', description: 'Ідентифікатор партнера', example: 1 })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Дані для оновлення партнера',
    type: UpdatePartnerDto,
  })
  @ApiResponse({ status: 200, description: 'Партнера успішно оновлено' })
  @UseInterceptors(AnyFilesInterceptor())
  async updatePartner(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePartnerDto: UpdatePartnerDto,
  ) {
    return this.partnersService.updatePartner(id, updatePartnerDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Видалити партнера за ID' })
  @ApiParam({
    name: 'lang',
    description: 'Мова відповіді (uk або en)',
    example: 'uk',
  })
  @ApiParam({ name: 'id', description: 'Ідентифікатор партнера', example: 1 })
  @ApiResponse({ status: 200, description: 'Партнера успішно видалено' })
  async deletePartner(@Param('id', ParseIntPipe) id: number) {
    await this.partnersService.deletePartner(id);
    return { message: 'Партнера успішно видалено' };
  }

  @ApiParam({ name: 'id', description: 'Зміна пріоритету', example: 1 })
  @ApiResponse({ status: 200, description: 'Пріоритет змінений!' })
  @Patch('reorder')
  @UseGuards(JwtAuthGuard)
  @ApiBody({
      description: 'Новий порядок партнерів за масивом їхніх ID',
      type: ReorderPartnersDto,
      examples: {
        example1: {
          summary: 'Поставити партнера з ID 5 на перше місце',
          value: { ids: [5, 2, 8, 1] },
        },
      },
    })
  async reorder(@Body() dto: ReorderPartnersDto) {
    return this.partnersService.reorder(dto.ids);
  }

} 
