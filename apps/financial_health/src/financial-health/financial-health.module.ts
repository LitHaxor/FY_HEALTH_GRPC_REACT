import { Module } from '@nestjs/common';
import { FinancialHealthService } from './financial-health.service';
import { FinancialHealthController } from './financial-health.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialHealth } from './entities/financial-health.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialHealth])],
  controllers: [FinancialHealthController],
  providers: [FinancialHealthService],
})
export class FinancialHealthModule {}
