import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product-dto'
import { Product } from './product.entity'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    return this.productsService.find()
  }

  @Get(':id')
  async findProductById(@Param('id') id: string) {
    return this.productsService.findOne(id)
  }

  @Post('create-product')
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto)
  }
}
