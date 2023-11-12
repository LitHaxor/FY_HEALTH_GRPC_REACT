import { Module } from '@nestjs/common';
import { FinalcialHealthService } from './finalcial_health.service';
import { FinalcialHealthController } from './finalcial_health.controller';

@Module({
  controllers: [FinalcialHealthController],
  providers: [FinalcialHealthService],
})
export class FinalcialHealthModule {}
