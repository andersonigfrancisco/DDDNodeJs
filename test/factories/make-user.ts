import { faker } from '@faker-js/faker'
import {
  User,
  UserProps,
} from '@/domain/users/enterprise/entities/user'
import { UniqueEntityId } from '@/cors/unique-entity-id'
import { CreateProductDTO } from '@/domain/product/shared/product-dtos'

export function makeUser(
  override: Partial<UserProps> = {},
  id?: UniqueEntityId,
) {
  const product = User.create(
    {
      name: faker.person.fullName(),
      email: faker.person.firstName(),
      password: faker.person.firstName(),
      ...override,
    },
    id,
  )
  return product
}
