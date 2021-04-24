import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';
import { Module as User_Module } from 'src/entities/module.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Role,
      User_Module,
      User
    ])
  ],
  providers: [UserService, UserResolver]
})
export class UserModule { }
