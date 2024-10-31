import { User } from '@/domain/users/enterprise/entities/user'
import { UserRepository } from '@/domain/users/application/repositories/user-repository'
import { PaginationParams } from '@/cors/repositories/pagination-params'

export class InMemoryUsersRepository implements UserRepository {
  public items: User[] = []

  async create(user: User) {
    this.items.push(user)
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((item) => item.email.toString() === email)
    if (!user) {
      return null
    }

    return user
  }


  async findMany({page,limit}: PaginationParams) {
    const user = this.items
    .sort((a,b)=>b.createdAt.getTime()-a.createdAt.getTime())
    .slice((page-1)*limit, page*limit)
    return user
  }
}
