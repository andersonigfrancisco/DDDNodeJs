import { ProductRepository } from '@/domain/product/application/repositories/product-repository'
import { Product } from '@/domain/product/enterprise/entities/Product'

export class InMemoryProductRepository implements ProductRepository {
  async findById(id: string): Promise<Product | null> {
    const product = this.items.find((item) => item.id.toString() === id)
    if (!product) {
      return null
    }

    return product
  }

  public items: Product[] = []

  async create(product: Product) {
    this.items.push(product)
  }

  async delete(product: Product) {
    const itemIndex = this.items.findIndex((item) => item.id === product.id)
    this.items.splice(itemIndex, 1)
  }
}
