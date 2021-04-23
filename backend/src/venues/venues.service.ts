import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { CreateVenueDto } from './dto/create-venue.dto'
import { UpdateVenueDto } from './dto/update-venue.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Venue } from './entities/venue.entity'
import { Repository } from 'typeorm'

@Injectable()
export class VenuesService {
  constructor(
    @InjectRepository(Venue)
    private venuesRepository: Repository<Venue>,
  ) {}

  async create(createVenueDto: CreateVenueDto) {
    try {
      return await this.venuesRepository.save(createVenueDto)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  findAll() {
    return this.venuesRepository.find()
  }

  async findOne(id: number) {
    const venue = await this.venuesRepository.findOne(id)
    if (!venue) throw new NotFoundException(`Venue with id ${id} doesn't exist`)
    return venue
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    try {
      return await this.venuesRepository.save({ ...updateVenueDto, id })
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  async remove(id: number) {
    await this.venuesRepository.delete(id)
  }
}
