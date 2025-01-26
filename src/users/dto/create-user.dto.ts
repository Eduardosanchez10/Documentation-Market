import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserGender } from 'src/common/enums/user-gender.enum';
import { UserRole } from 'src/common/enums/user-role.enum';

export class CreateUserDto {
  @ApiProperty({  type:"string",description: 'User name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({  type:"string",description: 'User gender' })
  @IsNotEmpty()
  @IsEnum(UserGender)
  gender: UserGender;

  @ApiProperty({  type:"string",description: 'User email' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({  type:"string",description: 'User password' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({  type:"string",description: 'User photo' })
  @IsString()
  @IsOptional()
  photo?: string;

  @ApiProperty({ type:"string",description: 'User role'})
  @IsEnum(UserRole)
  role: UserRole  =  UserRole.USER;
}
