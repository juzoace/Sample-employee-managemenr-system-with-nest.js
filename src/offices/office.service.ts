import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service';
import { createOfficeDto, officeDto } from './dto';

@Injectable()
export class OfficesService {
  constructor(private prisma: PrismaService) {}

  async getOffices(params: {
    skip?: number;
    take?: number;
    city?: string;
    state?: string;
  }): Promise<officeDto[]> {

    const { skip, take } = params;
    
    // skip nothing but fetch some records
    if (isNaN(skip) && isNaN(take) == false) {
      return await this.prisma.offices.findMany({
        take
    });
    }
    
    // skip nothing but fetch all records
    else if (isNaN(skip)) {
      return await this.prisma.offices.findMany();
    } 

    // skip some records, fetch some records
    else {
      return await this.prisma.offices.findMany({
        skip,
        take
      })
    }
  }

  async createOffices(dto: createOfficeDto): Promise<createOfficeDto> {
    const office = await this.prisma.offices.create({
      data: {
        ...dto,
      }
    });

    return office;
  }

}