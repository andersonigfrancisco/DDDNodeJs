import { makeProduct } from 'test/factories/make-product'

import { InMemoryProductRepository } from 'test/repositories/in-memory-product-repository'
import { DeleteProductUseCase } from './delete-product'
import { UniqueEntityId } from '@/cors/unique-entity-id'

let inMemoryProductRepository: InMemoryProductRepository
let sut: DeleteProductUseCase

describe('delete Product By Id', () => {
  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    sut = new DeleteProductUseCase(inMemoryProductRepository)
  })

  it('should be able to delete By Id Product', async () => {
    const id = new UniqueEntityId()
    const newProduct = makeProduct({}, id)

    await inMemoryProductRepository.create(newProduct)

    await sut.execute({
      productId: id.toString(),
    })

    expect(inMemoryProductRepository.items).toHaveLength(0)
  })
})
