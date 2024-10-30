import { Product } from '../../enterprise/entities/Product'
import { ProductRepository } from '../repositories/product-repository'

interface ProductUserCaseRequeste {
  productName: string
  productDescription: string
  productPrice: number
  productCategory: string
}

interface ProductUserCaseResponse {
  product: Product
}

export class ProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    productName,
    productDescription,
    productCategory,
    productPrice,
  }: ProductUserCaseRequeste): Promise<ProductUserCaseResponse> {
    const product = Product.create({
      category: productCategory,
      description: productDescription,
      name: productName,
      price: productPrice,
    })

    await this.productRepository.create(product)

    return { product }
  }
}
