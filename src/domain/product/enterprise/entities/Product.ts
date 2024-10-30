import { Entity } from '@/cors/entity'
import { Optional } from '@/cors/types/optional'
import { UniqueEntityId } from '@/cors/unique-entity-id'

interface ProductProps {
  name: string
  description: string
  price: number
  category: string
  createdAt: Date
  updatedAt?: Date
}

export class Product extends Entity<ProductProps> {
  get category() {
    return this.props.category
  }

  get name() {
    return this.props.name
  }

  get price() {
    return this.props.price
  }

  get description() {
    return this.props.description
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set category(acategory: string) {
    this.props.category = acategory
    this.touch()
  }

  set name(name: string) {
    this.props.name = name
    this.touch()
  }

  set description(description: string) {
    this.props.description = description
    this.touch()
  }

  set price(price: number) {
    this.props.price = price
    this.touch()
  }

  static create(
    props: Optional<ProductProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const data = new Product({ ...props, createdAt: new Date() }, id)

    return data
  }
}
