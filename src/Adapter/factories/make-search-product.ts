import { PrismaProductRepository } from '@/Drivers/repositories/prisma/prisma-product-repository'
import { GetByIdProductUseCase } from '@/domain/product/application/use-case/get-product-by-id'

export function makeGetByIdProduct() {
  const productRepository = new PrismaProductRepository
  const produtUseCase = new GetByIdProductUseCase(productRepository)
  return produtUseCase
}