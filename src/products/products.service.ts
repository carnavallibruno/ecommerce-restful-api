import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product-dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from './product.entity'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async find() {
    return await this.productRepository.find()
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } })

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`)
    }

    return product
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto)
    return await this.productRepository.save(product)
  }

  async update(id: string, data: any) {
    const productToUpdate = await this.productRepository.findOne({ where: { id } })

    if (!productToUpdate) {
      throw new NotFoundException(`Product with ID ${id} not found`)
    }

    return await this.productRepository.update(id, data)
  }
}
