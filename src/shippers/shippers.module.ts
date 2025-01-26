import { Module } from '@nestjs/common';
import { ShippersService } from './shippers.service';
import { ShippersController } from './shippers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipperEntity } from './entities/shipper.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [ShippersController],
  providers: [ShippersService],
  imports: [TypeOrmModule.forFeature([ShipperEntity]),AuthModule,UsersModule],
  exports:[TypeOrmModule]

})
export class ShippersModule {}
