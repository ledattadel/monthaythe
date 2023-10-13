import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductDetail } from './ProductDetail';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  ProductID: number;

  @Column()
  ProductName: string;

  @Column({ nullable: true, type: 'text' })
  ProductDescription: string;

  @Column({ nullable: true })
  Brand: string;

  @Column({ nullable: true })
  Unit: string;

  @OneToMany(() => ProductDetail, (productDetail) => productDetail.product)
  productDetails: ProductDetail[];
}
