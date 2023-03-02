import {
    Body,
    Controller,
    Get,
    Patch,
    Post
  } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}
  @Get()
    getEmployees() {
        return this.employeesService.getEmployees();
    }
    @Post()
    createEmployee() {
        return this.employeesService.createEmployee();
    }
}
