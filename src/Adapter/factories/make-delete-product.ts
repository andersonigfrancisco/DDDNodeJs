import { PrismaProductRepository } from '@/Drivers/repositories/prisma/prisma-product-repository'
import { DeleteProductUseCase } from '@/domain/product/application/use-case/delete-product'

export function makeDeleteProduct() {
  const productRepository = new PrismaProductRepository
  const deletedprodutUseCase = new DeleteProductUseCase(productRepository)
 
  return deletedprodutUseCase
}