import { DataSourceConfig } from './common/config/data.source';
import { Module } from '@nestjs/common';
import { StocksModule } from './stocks/stocks.module';
import { WarehousesModule } from './warehouses/warehouses.module';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { PurchasesModule } from './purchases/purchases.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';
import { EmployeesModule } from './employees/employees.module';
import { ShippersModule } from './shippers/shippers.module';
import { OrdersModule } from './orders/orders.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { DeliveryOrdersModule } from './delivery-orders/delivery-orders.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { DiscountsModule } from './discounts/discounts.module';
import { DiscountProductsModule } from './discount-products/discount-products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig,}),
    StocksModule,
    WarehousesModule,
    AuthModule,
    CustomersModule,
    PurchasesModule,
    PaymentMethodsModule,
    EmployeesModule,
    ShippersModule,
    OrdersModule,
    DeliveriesModule,
    DeliveryOrdersModule,
    OrderDetailsModule,
    DiscountsModule,
    DiscountProductsModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}