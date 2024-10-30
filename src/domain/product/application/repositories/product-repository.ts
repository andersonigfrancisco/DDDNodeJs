import { Product } from '../../enterprise/entities/Product'

export interface ProductRepository {
  create(product: Product): Promise<Product>
}
