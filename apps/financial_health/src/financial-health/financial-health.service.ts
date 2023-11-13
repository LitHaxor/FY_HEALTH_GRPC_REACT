import { Injectable } from '@nestjs/common';
import { CreateFinancialHealthDto } from './dto/create-financial-health.dto';
import { UpdateFinancialHealthDto } from './dto/update-financial-health.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialHealth } from './entities/financial-health.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FinancialHealthService {
  constructor(
    @InjectRepository(FinancialHealth)
    private readonly financialHealthRepository: Repository<FinancialHealth>,
  ) {}
  create(createFinancialHealthDto: CreateFinancialHealthDto) {
    const financialHealth = this.financialHealthRepository.create(
      createFinancialHealthDto,
    );
    return this.financialHealthRepository.save(financialHealth);
  }

  findAll() {
    return this.financialHealthRepository.find();
  }

  findOne(id: number) {
    return this.financialHealthRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateFinancialHealthDto: UpdateFinancialHealthDto) {
    return this.financialHealthRepository.update(
      { id },
      updateFinancialHealthDto,
    );
  }

  remove(id: number) {
    return this.financialHealthRepository.delete({ id });
  }
}
