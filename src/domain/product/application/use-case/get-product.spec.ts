import { makeProduct } from 'test/factories/make-product'
// import { ProductUseCase } from './product'
import { InMemoryProductRepository } from 'test/repositories/in-memory-product-repository'

let inMemoryProductRepository: InMemoryProductRepository
// let sut: ProductUseCase

describe('get Product', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    // sut = new ProductUseCase(inMemoryProductRepository)
  })

  it('should be able to create product', async () => {
    const product = makeProduct({ category: 'teste1' })

    await inMemoryProductRepository.create(product)

    expect(product.id).toBeTruthy()
    expect(inMemoryProductRepository.items[0].id).toEqual(product.id)
  })
})
