import {
  Product,
  ProductProps,
} from '@/domain/product/enterprise/entities/Product'

export function makeProduct(override: Partial<ProductProps> = {}) {
  const product = Product.create({
    name: 'anderson',
    category: 'teste',
    description: 'teste',
    price: 1,
    ...override,
  })
  return product
}
