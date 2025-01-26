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
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { AuthGuard } from './../auth/guards/auth.guard';
import { RoleGuard } from './../auth/guards/role.guard';
import { AdminAccess } from './../auth/decorators/admin.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { ApiHeader,ApiOperation,ApiTags } from '@nestjs/swagger';
import { CustomApiResponse } from 'src/common/decorator/Custom-Api-Response';
import { ApiResponseCreated } from 'src/common/decorator/api-response-created';
import { ApiResponseFindAll } from 'src/common/decorator/api-response-find-all';
import { ApiResponseFindOne } from 'src/common/decorator/api-response-find-one';
import { ApiResponseUpdated } from 'src/common/decorator/api-response-updated';
import { ApiResponseDeleted } from 'src/common/decorator/api-response-deleted';
import { Auth } from 'src/common/decorator/auth.decorator';
import { UserRole } from 'src/common/enums/user-role.enum';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @Auth(UserRole.ADMIN)
  @ApiResponseCreated(CreateCategoryDto, "category")
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @Auth(UserRole.ADMIN)
  @ApiResponseFindAll("category")
  findAll(@Query() paginationDto: PaginationDto) {
    return this.categoriesService.findAll(paginationDto);
  }

  @Get(':id')
  @Auth(UserRole.ADMIN)
  @ApiResponseFindOne("category")
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  @Auth(UserRole.ADMIN)
  @ApiResponseUpdated(CreateCategoryDto, "category")
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @Auth(UserRole.ADMIN)
  @ApiResponseDeleted("category")
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.remove(id);
  }
}
