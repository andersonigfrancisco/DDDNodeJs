// import { Product } from '../../enterprise/entities/Product'
import { Product } from '../../enterprise/entities/Product'
import { ProductRepository } from '../repositories/product-repository'

interface FetchProductUserCaseRequeste {
  page: number
  limit:number
}

interface ProductUserCaseResponse {
  product: Product[]
}

export class FetchProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    page,
    limit
  }: FetchProductUserCaseRequeste): Promise<ProductUserCaseResponse> {

    const product = await this.productRepository.findMany({page,limit })

    return {
      product,
    }
  }
}
