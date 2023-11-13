import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { FinancialHealthService } from './financial-health.service';
import { CreateFinancialHealthDto } from './dto/create-financial-health.dto';
import { UpdateFinancialHealthDto } from './dto/update-financial-health.dto';

@Controller()
export class FinancialHealthController {
  constructor(
    private readonly financialHealthService: FinancialHealthService,
  ) {}

  @GrpcMethod('FinancialHealthService', 'CreateFinancialHealth')
  create(@Payload() createFinancialHealthDto: CreateFinancialHealthDto) {
    return this.financialHealthService.create(createFinancialHealthDto);
  }

  @GrpcMethod('FinancialHealthService', 'FindAllFinancialHealth')
  findAll() {
    return this.financialHealthService.findAll();
  }

  @GrpcMethod('FinancialHealthService', 'findOneFinancialHealth')
  findOne(@Payload() id: number) {
    return this.financialHealthService.findOne(id);
  }

  @GrpcMethod('FinancialHealthService', 'updateFinancialHealth')
  update(@Payload() updateFinancialHealthDto: UpdateFinancialHealthDto) {
    return this.financialHealthService.update(
      updateFinancialHealthDto.id,
      updateFinancialHealthDto,
    );
  }

  @GrpcMethod('FinancialHealthService', 'removeFinancialHealth')
  remove(@Payload() id: number) {
    return this.financialHealthService.remove(id);
  }
}
