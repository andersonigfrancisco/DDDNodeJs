import { Product } from '../../entities/Product'
import { ProductRepository } from '../../repositories/product-repository'

interface ProductUserCaseRequeste {
  productName: string
  productDescription: string
  productPrice: number
  productCategory: string
}

export class ProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    productName,
    productDescription,
    productCategory,
    productPrice,
  }: ProductUserCaseRequeste) {
    const data = Product.create({
      category: productCategory,
      description: productDescription,
      name: productName,
      price: productPrice,
    })

    await this.productRepository.create(data)

    return data
  }
}
