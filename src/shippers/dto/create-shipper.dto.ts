import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateShipperDto {
  @ApiProperty({type: 'string', description: 'Shipper name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: 'string',description: 'Shipper address' })
  @IsString()
  @IsOptional()
  phone?: string;
}
