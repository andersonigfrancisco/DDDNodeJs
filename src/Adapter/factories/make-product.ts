import { PrismaProductRepository } from '@/Drivers/repositories/prisma/prisma-product-repository'
import { ProductUseCase } from '@/domain/product/application/use-case/product'

export function makeProduct() {
  const productRepository = new PrismaProductRepository
  const produtUseCase = new ProductUseCase(productRepository)
  return produtUseCase
}