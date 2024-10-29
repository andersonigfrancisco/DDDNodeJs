import { Entity } from "../../cors/entity";
import { Optional } from "../../cors/types/optional";
import { UniqueEntityId } from "../../cors/unique-entity-id";

interface ProductProps{
    name: string;
    description: string;
    price: number;
    category: string;
    createdAt:Date;
    updatedAt?:Date;
}

export class Product extends Entity<ProductProps>{

    get data(){
        return this.props;
    }

    static create(
        props:Optional<ProductProps,'createdAt'>, 
        id?:UniqueEntityId)
        {
        const data = new Product({
            ...props,
            createdAt: new Date()
        },id)

        return data;
    }
}