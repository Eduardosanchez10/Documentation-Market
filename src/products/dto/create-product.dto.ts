import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ type: 'string', description: 'Product name' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty({ type: 'string', description: 'Product description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ type: 'number', description: 'Product price' })
  @IsNumber()
  @IsOptional()
  @Min(0)
  price?: number = 0;

  @ApiProperty({ type: 'number', description: 'Product unit' })
  @IsNumber()
  @IsOptional()
  @Min(0)
  unit?: number = 0;

  @ApiProperty({ type: 'string', description: 'Product category' })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({ type: 'string', description: 'Product supplier' })
  @IsString()
  @IsNotEmpty()
  supplier: string;
}
