import { randomUUID } from "node:crypto";

interface ProductProps{
    name: string;
    description: string;
    price: number;
    category: string;
}

export class Product{
    public name: string;
    public description: string;
    public price: number;
    public category: string;
    public id : string;

constructor(props:ProductProps,id?:string){
        this.name=props.name;
        this.description=props.description;
        this.price=props.price;
        this.category=props.category;
        this.id = id ?? randomUUID();
    }
}