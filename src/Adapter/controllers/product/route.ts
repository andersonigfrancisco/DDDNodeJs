import { FastifyInstance } from 'fastify'
import { createProduct } from './create-product'
import { fecthProduct } from './fecth-product'
import { getByIdProduct } from './find-by-id'
import { deleteByIdProduct } from './delete-product'
import { EditProduct } from './update-product'

export async function productRoutes(app: FastifyInstance) {

  app.post('/product', createProduct)
  app.get('/product',fecthProduct)
  app.get('/get-by-id',getByIdProduct)
  app.delete('/product',deleteByIdProduct)
  app.put('/product',EditProduct)
}