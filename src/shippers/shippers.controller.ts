import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ShippersService } from './shippers.service';
import { CreateShipperDto } from './dto/create-shipper.dto';
import { UpdateShipperDto } from './dto/update-shipper.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomApiResponse } from 'src/common/decorator/Custom-Api-Response';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { AdminAccess } from 'src/auth/decorators/admin.decorator';
import { ApiResponseCreated } from 'src/common/decorator/api-response-created';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { ApiResponseFindAll } from 'src/common/decorator/api-response-find-all';
import { ApiResponseFindOne } from 'src/common/decorator/api-response-find-one';
import { ApiResponseUpdated } from 'src/common/decorator/api-response-updated';
import { ApiResponseDeleted } from 'src/common/decorator/api-response-deleted';
import { Auth } from 'src/common/decorator/auth.decorator';
import { UserRole } from 'src/common/enums/user-role.enum';

@ApiTags('Shippers')
@Controller('shippers')

export class ShippersController {
  constructor(private readonly shippersService: ShippersService) {}

  @Post()
      @Auth(UserRole.ADMIN)
  
  @ApiResponseCreated(CreateShipperDto, 'Shippers')
  create(@Body() createShipperDto: CreateShipperDto) {
    return this.shippersService.create(createShipperDto);
  }

  @Get()
      @Auth(UserRole.USER)

  @ApiResponseFindAll('Shippers')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.shippersService.findAll(paginationDto);
  }

  @Get(':id')
      @Auth(UserRole.USER)

  @ApiResponseFindOne('Shippers')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.shippersService.findOne(id);
  }

  @Patch(':id')
      @Auth(UserRole.ADMIN)

  @ApiResponseUpdated(CreateShipperDto, 'Shippers')
    update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateShipperDto: UpdateShipperDto,
  ) {
    return this.shippersService.update(id, updateShipperDto);
  }

  @Delete(':id')
      @Auth(UserRole.ADMIN)

  @ApiResponseDeleted('Shippers')
   remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.shippersService.remove(id);
  }
}
