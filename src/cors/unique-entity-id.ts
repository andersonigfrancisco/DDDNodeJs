import { randomUUID } from 'node:crypto'
import { ObjectId } from 'mongodb';

/*
export class UniqueEntityId {
  private values: string

  toString() {
    return this.values
  }

  toValues() {
    return this.values
  }

  constructor(values?: string) {
    //this.values = values ?? randomUUID()
    this.values = values ?? new ObjectId()
  }
}
*/




export class UniqueEntityId {
  private id: string;

  constructor(id?: string) {
    if (id) {
      if (typeof id === 'string' && /^[0-9a-fA-F]{24}$/.test(id)) {
        this.id = id;
      } else {
        throw new Error('Invalid ObjectId string format.');
      }
    } else {
      this.id = new ObjectId().toString();
    }
  }

  toString(): string {
    return this.id;
  }

  valueOf(): string {
    return this.id;
  }

  equals(other: UniqueEntityId): boolean {
    return this.id === other.valueOf();
  }
}
