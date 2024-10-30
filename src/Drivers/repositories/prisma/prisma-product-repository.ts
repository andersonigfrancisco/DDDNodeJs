import { prisma } from "@/Drivers/lib/prisma";
import { ProductRepository } from "@/domain/product/application/repositories/product-repository";
import { Product } from "@/domain/product/enterprise/entities/Product";
import { PaginationParams } from "@/cors/repositories/pagination-params";

export class PrismaProductRepository implements ProductRepository {

    async findById(id: string): Promise<Product | null> {
        const product = await prisma.product.findUnique({ where: { id } });

        if (!product) {
            return null;
        }
        return Product.mapToProductEntity(product);
    }

    async create(data: Product) {
        await prisma.product.create({
            data: {
                id: data.id.toString(),
                name: data.name,
                description: data.description,
                price: data.price,
                category: data.category,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            }
        });
    }

    async findMany({ page, limit }: PaginationParams): Promise<Product[]> {
        const products = await prisma.product.findMany({
            skip: (page - 1) * limit,
            take: limit,
        }); 

        return products.map(Product.mapToProductEntity);
    }

    async save(data: Product): Promise<void> {
        await prisma.product.update({
            where: { id: data.id.toString() },
            data: {
                name: data.name,
                category: data.category,
                description: data.description,
                price: data.price,
                updatedAt: data.updatedAt
            }
        });
    }

    async delete(product: Product): Promise<void> {
        await prisma.product.delete({
            where: {
                id: product.id.toString()
            }
        });
    }
}
