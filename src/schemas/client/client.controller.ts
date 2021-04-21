import { Controller, Get, Param } from '@nestjs/common';
import { Client } from 'src/entities/client.entity';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(
    private readonly clientService: ClientService
  ) { }

  @Get()
  async findAll(): Promise<Client[]> {
    return await this.clientService.getClientes();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string
  ): Promise<Client> {
    return await this.clientService.getSingleClient(id);
  }
}
