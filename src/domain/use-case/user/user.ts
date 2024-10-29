interface UserUseCaseRequest{
    UserName:string,
    UserPassword:string,
    UserEmail: string
}


export class UserUseCase{

    execute({UserName,UserEmail,UserPassword}:UserUseCaseRequest)
    {
        return {
            UserName,
            UserEmail,
            UserPassword
        }
    }
}