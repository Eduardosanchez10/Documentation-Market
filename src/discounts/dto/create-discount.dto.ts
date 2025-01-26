import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDate } from 'class-validator';

export class CreateDiscountDto {
  @ApiProperty({ type: 'string', description: 'nombre del descuento' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: 'string', description: 'Descuento descripcion' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ type: 'number', description: 'porcentaje del descuento' })
  @IsNumber()
  @IsNotEmpty()
  percentage: number;

  @ApiProperty({ type: 'number', description: 'monto del descuento' })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ type: 'string', format: 'date-time', description: 'fecha de inicio de descuento' })
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty({ type: 'string', format: 'date-time', description: 'fecha de fin de descuento' })
  @IsDate()
  @IsNotEmpty()
  endDate: Date;
}
