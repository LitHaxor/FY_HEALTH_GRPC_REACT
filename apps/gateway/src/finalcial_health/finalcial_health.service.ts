import { Injectable } from '@nestjs/common';
import { CreateFinalcialHealthDto } from './dto/create-finalcial_health.dto';
import { UpdateFinalcialHealthDto } from './dto/update-finalcial_health.dto';

@Injectable()
export class FinalcialHealthService {
  create(createFinalcialHealthDto: CreateFinalcialHealthDto) {
    return 'This action adds a new finalcialHealth';
  }

  findAll() {
    return `This action returns all finalcialHealth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} finalcialHealth`;
  }

  update(id: number, updateFinalcialHealthDto: UpdateFinalcialHealthDto) {
    return `This action updates a #${id} finalcialHealth`;
  }

  remove(id: number) {
    return `This action removes a #${id} finalcialHealth`;
  }
}
