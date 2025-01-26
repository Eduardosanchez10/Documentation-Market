import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { WarehousesController } from './warehouses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseEntity } from './entities/warehouse.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [WarehousesController],
  providers: [WarehousesService],
  imports: [TypeOrmModule.forFeature([WarehouseEntity]),AuthModule,UsersModule],
  exports:[TypeOrmModule]

})
export class WarehousesModule {}
