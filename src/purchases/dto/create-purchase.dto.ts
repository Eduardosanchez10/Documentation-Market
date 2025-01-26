import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PurchaseStatus } from './../../common/enums/purchase-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseDto {
  @ApiProperty({ type: 'string', description: 'Purchase status' })
  @IsEnum(PurchaseStatus)
  status: PurchaseStatus;

  @ApiProperty({ type: 'string', description: 'Purchase customer' })
  @IsString()
  @IsNotEmpty()
  customer: string;

  @ApiProperty({ type: 'string', description: 'Purchase product' })
  @IsString()
  @IsNotEmpty()
  paymentMethod: string;
}
