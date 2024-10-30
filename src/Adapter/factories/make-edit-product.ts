import { PrismaProductRepository } from '@/Drivers/repositories/prisma/prisma-product-repository'
import { EdirProductUseCase } from '@/domain/product/application/use-case/edite-product'

export function makeEditProduct() {
  const productRepository = new PrismaProductRepository
  const produtEditUseCase = new EdirProductUseCase(productRepository)
 
  return produtEditUseCase
}