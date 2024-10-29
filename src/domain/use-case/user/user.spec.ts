import {expect, test} from 'vitest';
import {UserUseCase} from './user'

test('create an product',()=>{

    const userUseCase = new UserUseCase()

    const data = userUseCase.execute({
        UserName:"anderson",
        UserEmail:"teste",
        UserPassword:"teste",
    })

    expect(data.UserPassword).toEqual('teste')
})