import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePaymentMethodDto {
  @ApiProperty({ type:"string",description: 'Payment method name' })
  @IsString()
  @IsNotEmpty()
  paymentMethod: string;
}
