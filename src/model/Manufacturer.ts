import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Manufacturer {
  @PrimaryGeneratedColumn()
  ManuID: number;

  @Column()
  ManuName: string;

  @Column({ nullable: true })
  ManuPhone: string;

  @Column({ nullable: true })
  ManuAddress: string;
}
