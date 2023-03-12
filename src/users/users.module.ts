import { Skills } from './entities/skills';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';


@Module({
  imports:[TypeOrmModule.forFeature([User, Skills])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
