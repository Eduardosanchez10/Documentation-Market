import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetailEntity } from './entities/order-detail.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
  imports: [TypeOrmModule.forFeature([OrderDetailEntity]),
AuthModule,UsersModule],
})
export class OrderDetailsModule {}
