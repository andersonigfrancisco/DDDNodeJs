interface ProductUserCaseRequeste{
    productName:string,
    productDescription:string,
    productPrice: number,
    productCategory: string,
}

export class ProductUseCase{

    execute({productName,productDescription,productCategory}:ProductUserCaseRequeste){
        return {
            productName,
            productDescription,
            productCategory
        }
    }

}
