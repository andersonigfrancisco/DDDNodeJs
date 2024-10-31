import { Entity } from '@/cors/entity'
import { Optional } from '@/cors/types/optional'
import { UniqueEntityId } from '@/cors/unique-entity-id'

export interface UserProps {
  name: string
  password: string
  email: string
  createdAt: Date
  updatedAt?: Date
}

export class User extends Entity<UserProps> {
  get name() {
    return this.props.name
  }

  get password() {
    return this.props.password
  }

  get email() {
    return this.props.email
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

  set name(name: string) {
    this.props.name = name
    this.touch()
  }

  set email(email: string) {
    this.props.email = email
    this.touch()
  }

  set password(password: string) {
    this.props.password = password
    this.touch()
  }

  static create(props: Optional<UserProps, 'createdAt'>, id?: UniqueEntityId) {
    const data = new User({ ...props, createdAt: props.createdAt ?? new Date() }, id)

    return data
  }

  static mapToProductEntity(userData: any): any {

    
    const user = User.create({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        createdAt: userData.createdAt,
        updatedAt: userData.updatedAt
    }, userData.id);

    // Retorne um objeto com os atributos desestruturados
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    };
}


}



