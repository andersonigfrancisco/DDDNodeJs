// import { Product } from '../../enterprise/entities/Product'
import { Either, rigth } from '@/cors/either'
import { User } from '../../enterprise/entities/user'
import { UserRepository } from '../repositories/user-repository'

interface FetchUserUserCaseRequeste {
  page: number
  limit:number
}

type UserUserCaseResponse  = Either<null, {product:User[]}>


export class FetchUserUseCase {
  constructor(private productRepository: UserRepository) {}

  async execute({
    page,
    limit
  }: FetchUserUserCaseRequeste): Promise<UserUserCaseResponse> {

    const product = await this.productRepository.findMany({page,limit })

    return rigth({
      product
    })
  }
}
