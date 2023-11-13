import { PartialType } from '@nestjs/mapped-types';
import { CreateFinancialHealthDto } from './create-finalcial_health.dto';

export class UpdateFinalcialHealthDto extends PartialType(
  CreateFinancialHealthDto,
) {}
