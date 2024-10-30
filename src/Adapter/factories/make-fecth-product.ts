import { PrismaProductRepository } from '@/Drivers/repositories/prisma/prisma-product-repository'
import { FetchProductUseCase } from '@/domain/product/application/use-case/fetch-product'

export function makeFetchProduct() {
  const productRepository = new PrismaProductRepository
  const produtFetchUseCase = new FetchProductUseCase(productRepository)
 
  return produtFetchUseCase
}