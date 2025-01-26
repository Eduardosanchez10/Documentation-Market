import { Module } from '@nestjs/common';
import { DiscountProductsService } from './discount-products.service';
import { DiscountProductsController } from './discount-products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountProductEntity } from './entities/discount-product.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [DiscountProductsController],
  providers: [DiscountProductsService],
  imports: [TypeOrmModule.forFeature([DiscountProductEntity]),
AuthModule,UsersModule],
exports:[TypeOrmModule]

})
export class DiscountProductsModule {}
