import { ProductUseCase } from './product'
import { InMemoryProductRepository } from 'test/repositories/in-memory-product-repository'

let inMemoryProductRepository: InMemoryProductRepository
let sut: ProductUseCase

describe('Create Product', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    sut = new ProductUseCase(inMemoryProductRepository)
  })

  it('should be able to create product', async () => {
    const { product } = await sut.execute({
      productName: 'anderson',
      productCategory: 'teste',
      productDescription: 'teste',
      productPrice: 1,
    })
    expect(product.id).toBeTruthy()
    expect(inMemoryProductRepository.items[0].id).toEqual(product.id)
  })
})
