// import { Product } from '../../enterprise/entities/Product'
import { ProductRepository } from '../repositories/product-repository'

interface DeleteProductUserCaseRequeste {
  productId: string
}

interface ProductUserCaseResponse {}

export class DeleteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    productId,
  }: DeleteProductUserCaseRequeste): Promise<ProductUserCaseResponse> {
    const product = await this.productRepository.findById(productId)

    if (!product) {
      throw new Error('Product not found!')
    }
    await this.productRepository.delete(product)

    return {}
  }
}
