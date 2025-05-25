import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ProductsModule } from './products/products.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
