import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
	JoinColumn,
} from 'typeorm';
import { Account} from './index';
import { Receipt } from './Receipt';
import { RepairOrderDetail } from './RepairOrderDetail';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  idCardNumber: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  address: string | null;

  @Column({ type: 'timestamp', nullable: true })
  dob: Date | null;



  @Column({ nullable: true })
  email: string | null;

  @Column({ nullable: true })
  phoneNumber: string | null;

  @Column('timestamp', { name: 'delete_at', nullable: true })
  deleteAt: Date | null;

  @OneToOne(() => Account, (account) => account.staff)
  account: Account;

  @OneToMany(() => Receipt, (receipt) => receipt.staff)
  receipts: Receipt[];

  @OneToMany(() => RepairOrderDetail, (rod) => rod.staff)
  repairOrderDetails: RepairOrderDetail[];
}
