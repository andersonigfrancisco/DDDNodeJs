import { Entity } from "../../cors/entity";

interface ProductProps{
    name: string;
    description: string;
    price: number;
    category: string;
}

export class Product extends Entity<ProductProps>{}