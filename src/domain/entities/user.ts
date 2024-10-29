import { randomUUID } from "node:crypto";

class User{
    
    public name: string;
    public password:string;
    public email: string;
    public id : string;

    constructor(name:string,password:string,email: string, id?:string){
        this.name=name;
        this.password=password;
        this.email=email;
        this.id= id ?? randomUUID();
    }
}