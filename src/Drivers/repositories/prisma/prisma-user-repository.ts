import { prisma } from "@/Drivers/lib/prisma";
import { UserRepository } from "@/domain/users/application/repositories/user-repository";
import { User } from "@/domain/users/enterprise/entities/user";
import { PaginationParams } from "@/cors/repositories/pagination-params";

export class PrismaUserRepository implements UserRepository {

    async findByEmail(email: string): Promise<User | null> {
        const product = await prisma.user.findUnique({ where: { email} });

        if (!product) {
            return null;
        }
        return User.mapToProductEntity(product);
    }

    async create(data: User) {
        
        await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            }
        });
    }

    async findMany({ page, limit }: PaginationParams): Promise<User[]> {
        const user = await prisma.user.findMany({
            skip: (page - 1) * limit,
            take: limit,
        }); 
        return user.map(userData => User.mapToProductEntity(userData));
    }
}
