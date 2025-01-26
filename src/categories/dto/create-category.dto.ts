import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ type: 'string', description: 'nombre de la categoria' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: "string",required: false, description: 'descripcion de la categoria' })
  @IsString()
  @IsOptional()
  description?: string;
}
