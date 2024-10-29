import {expect, test} from 'vitest';
import {UserUseCase} from './user'
import {UserRepository} from '../../repositories/user-repository'
import { User } from '../../entities/user';

const userRepository: UserRepository = {
    create: async (user: User) => {
        return user
    }
}

test('create an product',async ()=>{

    const userUseCase =  new UserUseCase(userRepository)

    const data = await userUseCase.execute({
        UserName:"anderson",
        UserEmail:"teste",
        UserPassword:"teste",
    })

    expect(data.password).toEqual('teste')
})