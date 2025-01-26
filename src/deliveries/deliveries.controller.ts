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
import { DeliveriesService } from './deliveries.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomApiResponse } from 'src/common/decorator/Custom-Api-Response';
import { AdminAccess } from 'src/auth/decorators/admin.decorator';
import { ApiResponseCreated } from 'src/common/decorator/api-response-created';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { ApiResponseFindAll } from 'src/common/decorator/api-response-find-all';
import { ApiResponseFindOne } from 'src/common/decorator/api-response-find-one';
import { ApiResponseUpdated } from 'src/common/decorator/api-response-updated';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { ApiResponseDeleted } from 'src/common/decorator/api-response-deleted';
import { Auth } from 'src/common/decorator/auth.decorator';
import { UserRole } from 'src/common/enums/user-role.enum';

@ApiTags('delivery')
@Controller('deliveries')

export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @Post()
  @Auth(UserRole.ADMIN)
  @ApiResponseCreated(CreateDeliveryDto, 'Delivery')
  create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveriesService.create(createDeliveryDto);
  }

  @Get()
  @Auth(UserRole.USER)
  
  @ApiResponseFindAll ('Delivery')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.deliveriesService.findAll(paginationDto);
  }

  @Get(':id')
  @Auth(UserRole.USER)
  
  @ApiResponseFindOne ('Delivery')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.deliveriesService.findOne(id);
  }

  @Patch(':id')
  @Auth(UserRole.ADMIN)
  
  @ApiResponseUpdated(CreateDeliveryDto, 'Delivery')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDeliveryDto: UpdateDeliveryDto,
  ) {
    return this.deliveriesService.update(id, updateDeliveryDto);
  }

  @Delete(':id')
  @Auth(UserRole.ADMIN)
  @ApiResponseDeleted ('Delivery')
    remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.deliveriesService.remove(id);
  }
}
