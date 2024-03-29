import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductDetail } from './ProductDetail';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  SupplierID: number;

  @Column()
  SupplierName: string;

  @Column({ nullable: true })
  SupPhone: string;

  @OneToMany(() => ProductDetail, (productDetail) => productDetail.supplier)
  productDetails: ProductDetail[];
}
