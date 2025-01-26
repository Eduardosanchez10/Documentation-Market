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
import { DiscountProductsService } from './discount-products.service';
import { CreateDiscountProductDto } from './dto/create-discount-product.dto';
import { UpdateDiscountProductDto } from './dto/update-discount-product.dto';
import { PaginationDto } from '../common/dtos/pagination/pagination.dto';
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

@ApiTags('Discount Products')
@Controller('discount-products')
export class DiscountProductsController {
  constructor(
    private readonly discountProductsService: DiscountProductsService,
  ) {}

  @Post()
    @Auth(UserRole.ADMIN)
  
  @ApiResponseCreated(CreateDiscountProductDto, 'discount product'
  )
  create(@Body() createDiscountProductDto: CreateDiscountProductDto) {
    return this.discountProductsService.create(createDiscountProductDto);
  }

  @Get()
  @Auth(UserRole.USER)
  
  @ApiResponseFindAll('discount products')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.discountProductsService.findAll(paginationDto);
  }

  @Get(':id')
  @Auth(UserRole.USER)
  
  @ApiResponseFindOne('discount product')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.discountProductsService.findOne(id);
  }

  @Patch(':id')
    @Auth(UserRole.ADMIN)

  @ApiResponseUpdated(CreateDiscountProductDto, 'discount product')
  
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDiscountProductDto: UpdateDiscountProductDto,
  ) {
    return this.discountProductsService.update(id, updateDiscountProductDto);
  }

  @Delete(':id')
    @Auth(UserRole.ADMIN)

  @ApiResponseDeleted('discount product')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.discountProductsService.remove(id);
  }
}
