import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Client } from '../../entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepo: Repository<Client>,
    private connection: Connection
  ) { }

  async getClientes(): Promise<Client[]> {
    try {
      return await this.clientRepo.find();
    } catch (err) {
      return err;
    }
  }

  async getSingleClient(id: string): Promise<Client> {
    try {
      return await this.clientRepo.findOne(id);
    } catch (err) {
      return err;
    }
  }
}