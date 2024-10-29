import { randomUUID } from "node:crypto";

class Product{
    public name: string;
    public description: string;
    public price: number;
    public category: string;
    public id : string;

constructor(name:string,description:string,price: number,category: string,id?:string){
        this.name=name;
        this.description=description;
        this.price=price;
        this.category=category;
        this.id = id ?? randomUUID();
    }
}