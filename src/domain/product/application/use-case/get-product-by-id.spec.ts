import { makeProduct } from 'test/factories/make-product'
import { GetByIdProductUseCase } from './get-product-by-id'
import { InMemoryProductRepository } from 'test/repositories/in-memory-product-repository'

let inMemoryProductRepository: InMemoryProductRepository
let sut: GetByIdProductUseCase

describe('get Product', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    sut = new GetByIdProductUseCase(inMemoryProductRepository)
  })

  it('should be able to create product', async () => {
    const newProduct = makeProduct({})

    await inMemoryProductRepository.create(newProduct)

    const product = await sut.execute({
      productId: newProduct.id.toString(),
    })

    expect(product).toBeTruthy()
    expect(inMemoryProductRepository.items[0].id).toEqual(newProduct.id)
  })
})
