import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { UpdateProductDTO } from '@/domain/product/shared/product-dtos'
import { makeEditProduct } from '@/Adapter/factories/make-edit-product'
import { ResourceNotFoundError } from '@/domain/product/application/use-case/errors/resource-not-found'


export async function EditProduct(request: FastifyRequest, reply: FastifyReply) {
  const productBodySchema = z.object({
    name: z.string().nonempty(),
    description: z.string().nonempty(),
    price: z.number(),
    category: z.string().nonempty(),
  })

  const productQuerySchema = z.object({
    productId: z.string().nonempty(),
  });
  

  const { name, description, price, category } = productBodySchema.parse(request.body) as UpdateProductDTO;

  const { productId } = productQuerySchema.parse(request.query);
  
  try {
    const makeEditProductUseCase = makeEditProduct()

    const {value} = await makeEditProductUseCase.execute({
      productId,
      productName:name,
      productDescription:description,
      productCategory:category,
      productPrice:price
    })
    return reply.status(201).send(value)
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(409).send({ message: error.message })
    }
    throw error
  }
  //return reply.status(201).send({ message: 'Produto atualizado com sucesso' })
}