import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ProductsService } from './products.service'

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
  createProduct(@Body() input: string) {
    if (this.productsService.checkForEmptyValue(input)) return 'Failed!'
    return `Created a new product called ${input}!`
  }
}
