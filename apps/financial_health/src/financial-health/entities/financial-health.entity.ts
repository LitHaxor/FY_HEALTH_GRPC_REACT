import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class FinancialHealth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  monthlyIncome: number;

  @Column()
  expenses: number;

  @Column()
  debts: number;

  @Column()
  assets: number;

  @Column()
  userId: number;

  @Column()
  score: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
