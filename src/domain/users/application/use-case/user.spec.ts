import { UserUseCase } from './user'
import { UserRepository } from '../repositories/user-repository'
import { User } from '../../enterprise/entities/user'

const userRepository: UserRepository = {
  create: async (user: User) => {
    return user
  },
}

test('create an product', async () => {
  const userUseCase = new UserUseCase(userRepository)

  const user = await userUseCase.execute({
    UserName: 'anderson',
    UserEmail: 'teste',
    UserPassword: 'teste',
  })

  expect(user.user.email).toEqual('teste')
})
