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
    get dacategoryta(){
        return this.props.category;
    }
    get name(){
        return this.props.name;
    }
    get price(){
        return this.props.price;
    }
    get description(){
        return this.props.description;
    }
    get createdAt(){
        return this.props.createdAt;
    }
    get updatedAt(){
        return this.props.updatedAt;
    }

    static create(
        props:Optional<ProductProps,'createdAt'>, 
        id?:UniqueEntityId)
        {
        const data = new Product({...props,createdAt: new Date() },id)

        return data;
    }
}