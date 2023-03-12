import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { HttpException, Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) 
    {}

    findAll(){
      return this.userRepository.find()
    }
    findOne(id: string){
      
        const user = this.userRepository.findOne({
            where: {
                id: parseInt(id)
            }
        })

        if(!user){
            throw new NotFoundException(`user ${id} not found`)
        }
        return user
    }
    create(createUserDto: CreateUserDto){
        const user = this.userRepository.create(createUserDto)
        return this.userRepository.save(user)
    }
    async update(id: string ,updateUserDto: UpdateUserDto){
        const user = await this.userRepository.preload({
           id: +id,
           ... updateUserDto
        })
        if(!user){
           throw new NotFoundException(`user ${id} not found`)
        }
        return this.userRepository.save(user)
       }
    async remove(id: string){
    const user = await  this.userRepository.findOne({where:{
        id:parseInt(id)
    }})
    if(!user){
        throw new NotFoundException(`user ${id} not found`)
    }   
    return this.userRepository.remove(user)
    }
}
