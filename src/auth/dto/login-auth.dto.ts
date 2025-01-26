import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthDto {
  @ApiProperty( {type: 'string',format: 'email', description: 'Email'} )
  @IsString()
  @IsNotEmpty()

  email: string;

  @ApiProperty({ type: 'string', description: 'Password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
