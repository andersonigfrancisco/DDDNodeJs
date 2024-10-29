import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/user-repository"

interface UserUseCaseRequest{
    UserName:string,
    UserPassword:string,
    UserEmail: string
}


export class UserUseCase{

    constructor(
        private userRepository: UserRepository
    ){}

    async execute({UserName,UserEmail,UserPassword}:UserUseCaseRequest)
    {
        const data =  User.create({
            email:UserEmail,
            name:UserName,
            password:UserPassword
        })
        
        return await this.userRepository.create(data);
    }
}