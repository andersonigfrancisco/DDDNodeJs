import { Product } from '../../enterprise/entities/Product'

export interface ProductRepository {
  findById(id: string): Promise<Product | null>
  create(product: Product): Promise<void>
  save(product: Product): Promise<void>
  delete(product: Product): Promise<void>
}
