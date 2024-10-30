import { ProductRepository } from '@/domain/product/application/repositories/product-repository'
import { Product } from '@/domain/product/enterprise/entities/Product'

export class InMemoryProductRepository implements ProductRepository {
  public items: Product[] = []

  async create(product: Product) {
    this.items.push(product)
  }
}
