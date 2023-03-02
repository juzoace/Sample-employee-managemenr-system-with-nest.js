import {
    Body,
    Controller,
    Get,
    Patch,
    Post,
    Query
  } from '@nestjs/common';
import { OfficesService } from './office.service';
import { createOfficeDto } from './dto';

@Controller('offices')
export class OfficesController {
  constructor(private officesService: OfficesService) {}
    @Get()
    getOffices(@Query('skip') skip: string, @Query('take') take: string, @Query('city') city: string, @Query('state') state: string) {
        return this.officesService.getOffices({skip: Number(skip), take: Number(take), city, state});
    }
    @Post()
    createOffices( @Body() dto: createOfficeDto ) {
        return this.officesService.createOffices(dto);
    }
}

