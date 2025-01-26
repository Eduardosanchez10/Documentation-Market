import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({type: 'string', description: 'Customer name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: 'string',description: 'Customer contact' })
  @IsString()
  @IsNotEmpty()
  contact: string;
  @ApiProperty({ type: 'string',description: 'Customer address' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({  type: 'string',description: 'Customer city' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ type : 'number', description: 'Customer postal code' })
  @IsNumber()
  @IsOptional()
  postalCode?: number;

  @ApiProperty({ type: 'string', description: 'Customer country' })
  @IsString()
  @IsNotEmpty()
  country: string;
}
