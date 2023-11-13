import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FinancialHealthService } from './financial-health.service';
import { CreateFinancialHealthDto } from './dto/create-financial-health.dto';
import { UpdateFinancialHealthDto } from './dto/update-financial-health.dto';

@Controller()
export class FinancialHealthController {
  constructor(
    private readonly financialHealthService: FinancialHealthService,
  ) {}

  @MessagePattern('createFinancialHealth')
  create(@Payload() createFinancialHealthDto: CreateFinancialHealthDto) {
    return this.financialHealthService.create(createFinancialHealthDto);
  }

  @MessagePattern('findAllFinancialHealth')
  findAll() {
    return this.financialHealthService.findAll();
  }

  @MessagePattern('findOneFinancialHealth')
  findOne(@Payload() id: number) {
    return this.financialHealthService.findOne(id);
  }

  @MessagePattern('updateFinancialHealth')
  update(@Payload() updateFinancialHealthDto: UpdateFinancialHealthDto) {
    return this.financialHealthService.update(
      updateFinancialHealthDto.id,
      updateFinancialHealthDto,
    );
  }

  @MessagePattern('removeFinancialHealth')
  remove(@Payload() id: number) {
    return this.financialHealthService.remove(id);
  }
}
