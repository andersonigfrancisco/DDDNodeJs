import { Entity } from "../../cors/entity";
import { Optional } from "../../cors/types/optional";
import { UniqueEntityId } from "../../cors/unique-entity-id";

interface UserProps{
    name: string;
    password:string;
    email: string;
    createdAt:Date;
    updatedAt?:Date;
}

export class User extends  Entity<UserProps>{

    get data(){
        return this.props;
    }

    static create(
        props:Optional<UserProps,'createdAt'>, 
        id?:UniqueEntityId)
        {
        const data = new User({...props,createdAt: new Date()},id)

        return data;
    }
}