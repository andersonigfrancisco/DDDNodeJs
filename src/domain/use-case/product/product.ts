import { Product } from "../../entities/Product";
import { ProductRepository } from "../../repositories/product-repository";

interface ProductUserCaseRequeste{
    productName:string,
    productDescription:string,
    productPrice: number,
    productCategory: string,
}

export class ProductUseCase{

    constructor(
        private productRepository:ProductRepository
    ){}

    async execute({productName,productDescription,productCategory,productPrice}:ProductUserCaseRequeste){
        
        const data = new Product({
            category:productCategory,
            description:productDescription,
            name:productName,
            price:productPrice,
        })

        return await this.productRepository.create(data)
    }
}
