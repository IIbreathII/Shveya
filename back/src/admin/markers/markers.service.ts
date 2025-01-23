import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marker } from './entities/markers.entity';
import { CreateMarkerDto } from './dto/create-marker.dto';
import { UpdateMarkerDto } from './dto/update-marker.dto';

@Injectable()
export class MarkersService {
  constructor(
    @InjectRepository(Marker)
    private readonly MarkerRepository: Repository<Marker>,
  ) {}

  async getAllMarkers(): Promise<Marker[]> {
    return this.MarkerRepository.find({ cache: true });
  }

  async createMarker(createMarkerDto: CreateMarkerDto): Promise<Marker> {
    if (!createMarkerDto.path) {
      throw new BadRequestException('Ссылка на изображение обязательна');
    }

    const newMarker = this.MarkerRepository.create(createMarkerDto);

    try {
      return await this.MarkerRepository.save(newMarker);
    } catch (error) {
      throw new BadRequestException('Ошибка при сохранении карточки');
    }
  }

  async getMarkerById(id: number): Promise<Marker> {
    const Marker = await this.MarkerRepository.findOne({ where: { id } });
    if (!Marker) {
      throw new NotFoundException(`Карточка с ID ${id} не найдена`);
    }
    return Marker;
  }

  async updateMarker(id: number, updateMarkerDto: UpdateMarkerDto): Promise<Marker> {
    const Marker = await this.MarkerRepository.findOne({ where: { id } });
    if (!Marker) {
      throw new NotFoundException(`Карточка с ID ${id} не найдена`);
    }

    this.MarkerRepository.merge(Marker, updateMarkerDto);
    return this.MarkerRepository.save(Marker);
  }

  async deleteMarker(id: number): Promise<void> {
    const Marker = await this.MarkerRepository.findOne({ where: { id } });
    if (!Marker) {
      throw new NotFoundException(`Карточка с ID ${id} не найдена`);
    }

    await this.MarkerRepository.remove(Marker);
  }
}
