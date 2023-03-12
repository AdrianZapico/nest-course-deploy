import { User } from './user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('skills')

export class Skills {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string; 

    @ManyToMany(() => User, (user:User) => user.skills)
    users: User[];
}
