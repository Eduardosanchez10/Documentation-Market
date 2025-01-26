import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({ type:"string",description: 'Employee name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type:"string",format: 'date',description: 'Employee surname' })
  @IsDate()
  @IsNotEmpty()
  birthDate: Date;

  @ApiProperty({ type:"string",description: 'Employee address' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ type:"string",description: 'Employee phone' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ type:"string",format: 'email',description: 'Employee email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type:"string",description: 'Employee note' })
  @IsString()
  @IsOptional()
  note?: string;
}
