import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Staff, Role } from './index';

var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({unique: true})
  username: string;

  @Column()
  password: string;

  @Column({name: "purchasecount", default: () => "0"})
  purchaseCount: number;

  // account - role
  @ManyToOne(() => Role, (role) => role.accounts)
  role: Role;

  // account - Staff
  @OneToOne(() => Staff, (staff) => staff.account, {cascade: true})
  @JoinColumn()
  staff: Staff;


	comparePassword = (password: string) => {
		return bcrypt.compareSync(password, this.password)
	}

	createPassword = (password: string) => {
		return (this.password = bcrypt.hashSync(password, 10))
	}

	generateJWT = () => {
		return jwt.sign({
			username: this.username,
			password: this.password,
		}, "GarageLink")
	}
}
