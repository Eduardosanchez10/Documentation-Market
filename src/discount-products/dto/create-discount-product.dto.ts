import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateDiscountProductDto {
  @ApiProperty({ type:"string",description: 'Product id' })
  @IsUUID()
  @IsNotEmpty()
  product: string;

  @ApiProperty({ type:"string",description: 'Discount id' })
  @IsUUID()
  @IsNotEmpty()
  discount: string;
}
