import { PartialType } from '@nestjs/mapped-types';
import { CreateFinalcialHealthDto } from './create-finalcial_health.dto';

export class UpdateFinalcialHealthDto extends PartialType(CreateFinalcialHealthDto) {}
