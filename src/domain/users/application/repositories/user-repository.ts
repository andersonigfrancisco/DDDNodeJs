import { PaginationParams } from '@/cors/repositories/pagination-params'
import { User } from '../../../users/enterprise/entities/user'

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>
  create(user: User): Promise<void>
  findMany(params: PaginationParams): Promise<User[]>
}
