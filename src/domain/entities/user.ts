import { Entity } from "@/cors/entity";
import { Optional } from "@/cors/types/optional";
import { UniqueEntityId } from "@/cors/unique-entity-id";

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
    get name(){
        return this.props.name;
    }
    get password(){
        return this.props.password;
    }
    get daemailta(){
        return this.props.email;
    }
    get createdAt(){
        return this.props.createdAt;
    }
    get updatedAt(){
        
        return this.props.updatedAt;
    }

    private touch(){
        this.props.updatedAt = new Date()
    }

    set name(name:string){
        this.props.name = name;
        this.touch();
    }

    set password(password:string){
        this.props.password = password;
        this.touch();
    }

    set email(email:string){
        this.props.email = email;
        this.touch();
    }

    static create(props:Optional<UserProps,'createdAt'>, id?:UniqueEntityId)
    {
    
        const data = new User({...props,createdAt: new Date()},id)

        return data;
    }
}