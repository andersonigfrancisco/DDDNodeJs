import { User } from '../../enterprise/entities/user'
import { UserRepository } from '../repositories/user-repository'
import { ResourceNotFoundError } from '@/domain/product/application/use-case/errors/resource-not-found'
import { Either, left, rigth } from '@/cors/either'
const bcrypt = require('bcrypt');

interface UserUseCaseRequest {
  UserName: string
  UserPassword: string
  UserEmail: string
}

type UserUseCaseResponse  = Either<
ResourceNotFoundError, 
  {
    user:User
  }
>


export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    UserName,
    UserEmail,
    UserPassword,
  }: UserUseCaseRequest): Promise<UserUseCaseResponse> {

    

    const user_ = await this.userRepository.findByEmail(UserEmail)

    if (user_!=null) {
      return left(new ResourceNotFoundError())
    }
    

    const password_hash = await bcrypt.hash(UserPassword, 10);
 

    const user = User.create({
      email: UserEmail,
      name: UserName,
      password: password_hash,
    })

    await this.userRepository.create(user)

    return rigth({
      user
    })
  }
}
