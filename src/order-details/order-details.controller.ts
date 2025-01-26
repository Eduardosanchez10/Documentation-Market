import { PublicAccess } from './../auth/decorators/public.decorator';
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
import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomApiResponse } from 'src/common/decorator/Custom-Api-Response';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { ApiResponseCreated } from 'src/common/decorator/api-response-created';
import { ApiResponseFindAll } from 'src/common/decorator/api-response-find-all';
import { ApiResponseFindOne } from 'src/common/decorator/api-response-find-one';
import { AdminAccess } from 'src/auth/decorators/admin.decorator';
import { ApiResponseUpdated } from 'src/common/decorator/api-response-updated';
import { create } from 'domain';
import { ApiResponseDeleted } from 'src/common/decorator/api-response-deleted';
import { Auth } from 'src/common/decorator/auth.decorator';
import { UserRole } from 'src/common/enums/user-role.enum';

@ApiTags('OrderDetails')
@Controller('order-details')

export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Post()
      @Auth(UserRole.ADMIN)
  
  @ApiResponseCreated(CreateOrderDetailDto, 'OrderDetail')
  create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailsService.create(createOrderDetailDto);
  }

  @Get()
      @Auth(UserRole.USER)

  @ApiResponseFindAll('OrderDetail')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.orderDetailsService.findAll(paginationDto);
  }

  @Get(':id')
      @Auth(UserRole.USER)

  @ApiResponseFindOne('OrderDetail')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.orderDetailsService.findOne(id);
  }

  @Patch(':id')
      @Auth(UserRole.ADMIN)

  @ApiResponseUpdated(CreateOrderDetailDto, 'OrderDetail')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    return this.orderDetailsService.update(id, updateOrderDetailDto);
  }

  @Delete(':id')
      @Auth(UserRole.ADMIN)

  @ApiResponseDeleted('OrderDetail')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.orderDetailsService.remove(id);
  }
}
