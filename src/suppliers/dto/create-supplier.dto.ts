import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSupplierDto {
  @ApiProperty({ type: 'string', description: 'Supplier name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: 'string', description: 'Supplier phone number' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ type: 'string', description: 'Supplier email' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ type: 'string', description: 'Supplier address' })
  @IsString()
  @IsOptional()
  address?: string;
}
