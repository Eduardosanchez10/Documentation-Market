import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWarehouseDto {
  @ApiProperty({type: 'string', description: 'Product name' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({type: 'string', description: 'Product stock' })
  @IsString()
  @IsNotEmpty()
  stock: string;
}
