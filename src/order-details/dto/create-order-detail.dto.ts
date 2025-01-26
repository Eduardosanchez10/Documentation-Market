import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateOrderDetailDto {
  @ApiProperty({ type:"number",description: 'Order detail quantity' })
  @IsNumber()
  @IsOptional()
  quantity?: number = 0;

  @ApiProperty({ type:"string",description: 'Order id' })
  @IsUUID()
  @IsNotEmpty()
  order: string;

  @ApiProperty({ type:"string",description: 'Product id' })
  @IsUUID()
  @IsNotEmpty()
  product: string;
}
