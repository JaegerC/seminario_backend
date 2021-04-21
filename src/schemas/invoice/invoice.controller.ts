import { Body, Controller, Post, Put } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './create-invoice.dto';
import { Invoice } from 'src/entities/invoce.entity';

@Controller('invoice')
export class InvoiceController {
  constructor(
    private readonly invoiceService: InvoiceService
  ) { }

  @Put('create')
  async addInvoice(
    @Body() createInvoiceDto: CreateInvoiceDto,
  ): Promise<Invoice> {
    const { concept, items, productId, clientId } = createInvoiceDto;
    return await this.invoiceService.createInvoice(concept, items, productId, clientId);
  }
}
