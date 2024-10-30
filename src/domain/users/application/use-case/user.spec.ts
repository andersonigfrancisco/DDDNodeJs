import { UserUseCase } from './user'
import { UserRepository } from '../../../product/application/repositories/user-repository'
import { User } from '../../enterprise/entities/user'

const userRepository: UserRepository = {
  create: async (user: User) => {
    return user
  },
}

test('create an product', async () => {
  const userUseCase = new UserUseCase(userRepository)

  const data = await userUseCase.execute({
    UserName: 'anderson',
    UserEmail: 'teste',
    UserPassword: 'teste',
  })

  expect(data.data.password).toEqual('teste')
})
