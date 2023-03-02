import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async getEmployees() {
    return await this.prisma.employees.findMany()
  }

  async createEmployee() {
    // return await this.prisma.employees.create({
    //     data: {

    //     }
    // })
    
  }
}