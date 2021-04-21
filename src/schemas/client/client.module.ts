import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Client } from '../../entities/client.entity';
import { Invoice } from '../../entities/invoce.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Client,
      Invoice
    ])
  ],
  providers: [ClientService],
  controllers: [ClientController]
})
export class ClientModule { }
