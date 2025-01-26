import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateDeliveryOrderDto {
  @ApiProperty({ type:"string",description: 'Order id' })
  @IsUUID()
  @IsNotEmpty()
  order: string;

  @ApiProperty({ type:"string",description: 'Delivery id' })
  @IsUUID()
  @IsNotEmpty()
  delivery: string;
}
