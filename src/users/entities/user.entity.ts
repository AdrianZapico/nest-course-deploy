import { Skills } from './skills';
import { Entity, PrimaryGeneratedColumn, Column, JoinTable,  ManyToMany } from "typeorm"

@Entity('users')

export class User{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name:string;

    @Column('int')
    age:number;

    @Column()
    email:string;

    @Column()
    phone:string;

    @JoinTable()
    @ManyToMany(() => Skills, (skills:Skills) => skills.users)
    skills: string[]

}