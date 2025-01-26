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
import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
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

@ApiTags('warehouses')
@Controller('warehouses')

export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Post()
      @Auth(UserRole.ADMIN)
  
  @ApiResponseCreated(CreateWarehouseDto,'warehouse')
  create(@Body() createWarehouseDto: CreateWarehouseDto) {
    return this.warehousesService.create(createWarehouseDto);
  }

  @Get()
      @Auth(UserRole.USER)

  @ApiResponseFindAll('warehouses')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.warehousesService.findAll(paginationDto);
  }

  @Get(':id')
      @Auth(UserRole.USER)

  @ApiResponseFindOne('warehouse')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.warehousesService.findOne(id);
  }

  @Patch(':id')
      @Auth(UserRole.ADMIN)

  @ApiResponseUpdated(CreateWarehouseDto,'warehouse')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
  ) {
    return this.warehousesService.update(id, updateWarehouseDto);
  }

  @Delete(':id')
      @Auth(UserRole.ADMIN)

  @ApiResponseDeleted('warehouse')  
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.warehousesService.remove(id);
  }
}
