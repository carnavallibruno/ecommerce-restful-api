import { Injectable } from '@nestjs/common'

@Injectable()
export class ProductsService {
  checkForEmptyValue(value: string): boolean {
    return (
      value === undefined ||
      value === null ||
      value === '' ||
      (typeof value === 'object' && Object.keys(value).length === 0)
    )
  }
}
