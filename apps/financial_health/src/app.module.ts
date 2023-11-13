import { Module } from '@nestjs/common';
import { FinancialHealthModule } from './financial-health/financial-health.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    FinancialHealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
