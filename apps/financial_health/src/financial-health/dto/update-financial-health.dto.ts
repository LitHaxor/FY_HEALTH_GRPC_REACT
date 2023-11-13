import { PartialType } from '@nestjs/mapped-types';
import { CreateFinancialHealthDto } from './create-financial-health.dto';

export class UpdateFinancialHealthDto extends PartialType(
  CreateFinancialHealthDto,
) {
  id: number;
}
