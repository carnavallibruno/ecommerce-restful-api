import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Product } from '../products/product.entity'
import { ConfigService } from '@nestjs/config'

export const getDatabaseConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: configService.get('DB_HOST') || 'localhost',
  port: 5432,
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [Product],
  synchronize: configService.get('NODE_ENV') !== 'production',
})
