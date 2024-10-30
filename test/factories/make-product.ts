import { faker } from '@faker-js/faker'
import {
  Product,
  ProductProps,
} from '@/domain/product/enterprise/entities/Product'
import { UniqueEntityId } from '@/cors/unique-entity-id'

export function makeProduct(
  override: Partial<ProductProps> = {},
  id?: UniqueEntityId,
) {
  const product = Product.create(
    {
      name: faker.food.vegetable(),
      category: faker.food.meat(),
      description: faker.food.description(),
      price: 1,
      ...override,
    },
    id,
  )
  return product
}
