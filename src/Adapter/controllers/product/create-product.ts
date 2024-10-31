import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { CreateProductDTO } from '@/domain/product/shared/product-dtos'
import { makeProduct } from '@/Adapter/factories/make-product'
import { ResourceNotFoundError } from '@/domain/product/application/use-case/errors/resource-not-found'


export async function createProduct(request: FastifyRequest, reply: FastifyReply) {
  const productBodySchema = z.object({
    name: z.string().nonempty(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
  })

  const { name, description, price, category } = productBodySchema.parse(request.body) as CreateProductDTO;
  try {
    const makeProductUseCase = makeProduct()

    await makeProductUseCase.execute({
      productName:name,
      productDescription:description,
      productCategory:category,
      productPrice:price
    })
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(409).send({ message: error.message })
    }
    throw error
  }
  return reply.status(201).send()
}