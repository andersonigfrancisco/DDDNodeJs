// import { Product } from '../../enterprise/entities/Product'
import { Product } from '../../enterprise/entities/Product'
import { ProductRepository } from '../repositories/product-repository'

interface GetByIdProductUserCaseRequeste {
  productId: string
}

interface ProductUserCaseResponse {
  product: Product
}

export class GetByIdProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    productId,
  }: GetByIdProductUserCaseRequeste): Promise<ProductUserCaseResponse | null> {
    const product = await this.productRepository.findById(productId)

    if (!product) {
      return null
    }

    return {
      product,
    }
  }
}
