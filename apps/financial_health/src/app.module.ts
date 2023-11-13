import { Module } from '@nestjs/common';
import { FinancialHealthModule } from './financial-health/financial-health.module';

@Module({
  imports: [FinancialHealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
