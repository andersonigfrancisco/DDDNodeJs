import {expect, test} from 'vitest';
import {ProductUseCase} from './product'
import {ProductRepository} from '../../repositories/product-repository'
import { Product } from '../../entities/Product';

const testeProductRepository:ProductRepository = {
    create: async  (product: Product) => {
        return product
    }
}

test('create an product',async ()=>{

    const productUseCase =  new ProductUseCase(testeProductRepository)

    const data = await productUseCase.execute({
        productName:"anderson",
        productCategory:"teste",
        productDescription:"teste",
        productPrice:1
    })

    expect(data.name).toEqual('anderson')
})