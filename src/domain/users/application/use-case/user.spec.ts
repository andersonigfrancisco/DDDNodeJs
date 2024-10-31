import { ProductUseCase } from '@/domain/product/application/use-case/product'
import { UserUseCase } from './user'
import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { PrismaUserRepository } from '@/Drivers/repositories/prisma/prisma-user-repository'

let inMemoryUserRepository: InMemoryUsersRepository
let sut: UserUseCase
let prismaUserRepository:PrismaUserRepository
let _sut:UserUseCase

describe('Create users', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUsersRepository()
    sut = new UserUseCase(inMemoryUserRepository)
    prismaUserRepository = new PrismaUserRepository()
    _sut = new UserUseCase(prismaUserRepository)
  })

  it('should be able to create users', async () => {

    const result = await sut.execute({
      UserName: 'anderson',
      UserEmail: 'andersonfrancisco@gmail.com',
      UserPassword: 'teste',
    })

    const {isRight} =  await _sut.execute({
      UserName: 'anderson',
      UserEmail: 'andersonfrancisco@gmail.com',
      UserPassword: 'teste',
    })

    expect(result.isRight()).toBe(true)
    //expect(inMemoryUserRepository.items[0]).toEqual(result.value?.user)
  })
})
