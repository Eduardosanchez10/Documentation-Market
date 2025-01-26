import { Module } from '@nestjs/common';
import { DeliveryOrdersService } from './delivery-orders.service';
import { DeliveryOrdersController } from './delivery-orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryOrderEntity } from './entities/delivery-order.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [DeliveryOrdersController],
  providers: [DeliveryOrdersService],
  imports: [TypeOrmModule.forFeature([DeliveryOrderEntity]),
AuthModule,UsersModule],
exports:[TypeOrmModule]

})
export class DeliveryOrdersModule {}
