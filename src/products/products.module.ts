import { AuthController } from './../auth/auth.controller';
import { Module } from '@nestjs/common';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { UsersController } from 'src/users/users.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [ProductsController,],
  providers: [ProductsService,],
  imports: [TypeOrmModule.forFeature([ProductEntity]),
  AuthModule,UsersModule
],
})
export class ProductsModule {}
