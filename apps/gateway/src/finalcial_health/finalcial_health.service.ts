import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateFinancialHealthDto } from './dto/create-finalcial_health.dto';
import { UpdateFinalcialHealthDto } from './dto/update-finalcial_health.dto';
import { FinancialHealthService as FinancialHealthGrpc } from 'apps/financial_health/src/financial-health/financial-health.service';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class FinalcialHealthService implements OnModuleInit {
  private financialHealthGrpcService: FinancialHealthGrpc;

  constructor(
    @Inject('FINANCIAL_HEALTH_PACKAGE') private client?: ClientGrpc,
  ) {}

  onModuleInit() {
    this.financialHealthGrpcService =
      this.client.getService<FinancialHealthGrpc>('FinancialHealthService');
  }

  create(createFinalcialHealthDto: CreateFinancialHealthDto) {
    return this.financialHealthGrpcService.CreateFinancialHealth(
      createFinalcialHealthDto,
    );
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
