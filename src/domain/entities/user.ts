import { randomUUID } from "node:crypto";

interface UserProps{
    name: string;
    password:string;
    email: string;
}

export class User{
    
    public name: string;
    public password:string;
    public email: string;
    public id : string;

    constructor(props:UserProps, id?:string){
        this.name=props.name;
        this.password=props.password;
        this.email=props.email;
        this.id= id ?? randomUUID();
    }
}