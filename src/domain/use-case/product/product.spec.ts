import {expect, test} from 'vitest';
import {ProductUseCase} from './product'

test('create an product',()=>{

    const productUseCase = new ProductUseCase()

    const data = productUseCase.execute({
        productName:"anderson",
        productCategory:"teste",
        productDescription:"teste",
        productPrice:1
    })

    expect(data.productName).toEqual('anderson')
})