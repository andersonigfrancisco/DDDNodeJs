// import { Product } from '../../enterprise/entities/Product'
import { Product } from '../../enterprise/entities/Product'
import { ProductRepository } from '../repositories/product-repository'

interface EditProductUserCaseRequeste {
  productId: string
  productName: string
  productDescription: string
  productPrice: number
  productCategory: string
}

interface ProductUserCaseResponse {
  product: Product
}

export class EdirProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    productId,
    productName,
    productCategory,
    productDescription,
    productPrice,
  }: EditProductUserCaseRequeste): Promise<ProductUserCaseResponse> {
    const product = await this.productRepository.findById(productId)

    if (!product) {
      throw new Error('Product not found!')
    }
    product.category = productCategory
    product.name = productName
    product.description = productDescription
    product.price = productPrice

    await this.productRepository.save(product)

    return {
      product,
    }
  }
}
