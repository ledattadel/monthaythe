import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Receipt } from './index';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  CustomerID: number;

  @Column()
  CustomerName: string;

  @Column({ nullable: true })
  CusAddress: string;

  @Column({ nullable: true })
  CusPhone: string;

  @OneToMany(() => Receipt, (receipt) => receipt.customer)
  receipts: Receipt[];
}
