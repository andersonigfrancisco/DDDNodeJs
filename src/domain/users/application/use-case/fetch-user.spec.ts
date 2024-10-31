import { makeProduct } from 'test/factories/make-product'
import { FetchUserUseCase } from './fetch-user'
import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { makeUser } from 'test/factories/make-user'

let inUserRepository: InMemoryUsersRepository
let sut: FetchUserUseCase

describe('fetch users', () => {
  beforeEach(() => {
    inUserRepository = new InMemoryUsersRepository()
    sut = new FetchUserUseCase(inUserRepository)
  })

  it('should be able to fetch product', async () => {
   
    await inUserRepository.create(makeUser({createdAt: new Date(2022,0,20)}))
    await inUserRepository.create(makeUser({createdAt: new Date(2022,0,18)}))
    await inUserRepository.create(makeUser({createdAt: new Date(2022,0,23)}))

    const result = await sut.execute({page:1,limit:20})

    expect(result.value?.product).toEqual([
        expect.objectContaining({createdAt: new Date(2022,0,23)}),
        expect.objectContaining({createdAt: new Date(2022,0,20)}),
        expect.objectContaining({createdAt: new Date(2022,0,18)})
    ])
  })
})
