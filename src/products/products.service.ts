import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product-dto'

@Injectable()
export class ProductsService {
  checkForEmptyValue(value: CreateProductDto): boolean {
    return (
      value === undefined ||
      value === null ||
      (typeof value === 'object' && Object.keys(value).length === 0)
    )
  }
}
