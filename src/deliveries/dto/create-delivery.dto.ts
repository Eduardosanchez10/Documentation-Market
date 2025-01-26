import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateDeliveryDto {
  @ApiProperty({type: 'string', description: 'Delivery name' })
  @IsUUID()
  @IsNotEmpty()
  shipper: string;

  @ApiProperty({ type: 'string',description: 'Delivery address' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ type: 'number',description: 'Delivery cost' })
  @IsString()
  @IsOptional()
  shoppingCost: number = 0;
}
