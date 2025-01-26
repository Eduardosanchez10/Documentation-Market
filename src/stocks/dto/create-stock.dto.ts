import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateStockDto {
  @ApiProperty({ type: 'number', description: 'Stock quantity' })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  quantity: number;

  @ApiProperty({ type: 'number', description: 'Stock product' })
  @IsString()
  @IsNotEmpty()
  product: string;
}
