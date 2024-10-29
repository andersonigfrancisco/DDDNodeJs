import { Entity } from "../../cors/entity";

interface UserProps{
    name: string;
    password:string;
    email: string;
}

export class User extends  Entity<UserProps>{}