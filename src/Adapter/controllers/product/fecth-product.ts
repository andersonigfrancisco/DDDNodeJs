import { makeFetchProduct } from '@/Adapter/factories/make-fecth-product';
import { PaginationParams } from '@/cors/repositories/pagination-params';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function fecthProduct(request: FastifyRequest, reply: FastifyReply) {

    const productQuerySchema = z.object({
        limit: z.coerce.number().default(20),
        page: z.coerce.number().default(1),
    });

    const { limit, page } = productQuerySchema.parse(request.query) as PaginationParams;

    const fetchProduct = makeFetchProduct();

    const {value} = await fetchProduct.execute({ limit, page });

    return reply.status(200).send(value);
}
