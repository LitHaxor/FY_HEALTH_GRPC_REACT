import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { FinalcialHealthModule } from './finalcial_health/finalcial_health.module';
import { CalculatorModule } from './calculator/calculator.module';

@Module({
  imports: [AuthModule, UserModule, FinalcialHealthModule, CalculatorModule],
  controllers: [],
  providers: [],
})
export class GatewayModule {}
