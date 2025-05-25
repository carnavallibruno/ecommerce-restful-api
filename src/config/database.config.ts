import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Product } from '../products/product.entity'

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  username: process.env.DB_USER || 'default_username',
  password: process.env.DB_PASSWORD || 'default_password',
  database: process.env.DB_NAME || 'default_database',
  entities: [Product],
  synchronize: true,
}
