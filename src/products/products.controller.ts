import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product-dto'
import { Product } from './product.entity'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return 'This action returns all products'
  }

  @Get(':id')
  findProductById(@Param() id: string) {
    return `This product has the id of ${id}`
  }

  @Post('createProduct')
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto)
  }
}
