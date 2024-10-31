import { makeDeleteProduct } from '@/Adapter/factories/make-delete-product';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function deleteByIdProduct(request: FastifyRequest, reply: FastifyReply) {

    const productQuerySchema = z.object({
        productId: z.coerce.string().nonempty(),
    });

    const { productId } = productQuerySchema.parse(request.query);

    const delteProduct = makeDeleteProduct();

    const product = await delteProduct.execute({ productId });

    if(product!=null)
        return reply.status(200).send(product.value);

    return reply.status(200).send(product);
}
