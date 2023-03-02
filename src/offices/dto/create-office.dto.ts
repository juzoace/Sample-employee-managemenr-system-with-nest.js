import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsNumber
  } from 'class-validator';

export class createOfficeDto {
    
    @IsNotEmpty()
    @IsNumber()
    office_id: number;

    @IsString()
    @IsNotEmpty()
    address: string;
    
    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;

}

export class officeDto {

  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  office_id: number;

  @IsString()
  @IsNotEmpty()
  address: string;
  
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;
}