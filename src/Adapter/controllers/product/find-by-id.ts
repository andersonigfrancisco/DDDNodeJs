import { makeGetByIdProduct } from '@/Adapter/factories/make-search-product';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function getByIdProduct(request: FastifyRequest, reply: FastifyReply) {

    const productQuerySchema = z.object({
        productId: z.coerce.string().nonempty(),
    });

    const { productId } = productQuerySchema.parse(request.query);

    const fetchProduct = makeGetByIdProduct();

    const product = await fetchProduct.execute({ productId });

    if(product!=null)
        return reply.status(200).send(product.value);

    return reply.status(200).send(product);
}
