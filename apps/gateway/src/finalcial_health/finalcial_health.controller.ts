import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FinalcialHealthService } from './finalcial_health.service';
import { CreateFinalcialHealthDto } from './dto/create-finalcial_health.dto';
import { UpdateFinalcialHealthDto } from './dto/update-finalcial_health.dto';

@Controller('finalcial-health')
export class FinalcialHealthController {
  constructor(
    private readonly finalcialHealthService: FinalcialHealthService,
  ) {}

  @Post()
  create(@Body() createFinalcialHealthDto: CreateFinalcialHealthDto) {
    return this.finalcialHealthService.create(createFinalcialHealthDto);
  }

  @Get()
  findAll() {
    return this.finalcialHealthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.finalcialHealthService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFinalcialHealthDto: UpdateFinalcialHealthDto,
  ) {
    return this.finalcialHealthService.update(+id, updateFinalcialHealthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.finalcialHealthService.remove(+id);
  }
}
