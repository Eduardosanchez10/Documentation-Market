import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ type:"string",format: 'date',description: 'Order date' })
  @IsDate()
  @IsNotEmpty()
  orderDate: Date;

  @ApiProperty({ type:"string",description: 'Required date' })
  @IsUUID()
  @IsNotEmpty()
  customer: string;

  @ApiProperty({ type:"string",description: 'Employee id' })
  @IsUUID()
  @IsNotEmpty()
  employee: string;

  @ApiProperty({ type:"string",description: 'Shipper id' })
  @IsUUID()
  @IsNotEmpty()
  shipper: string;
}
