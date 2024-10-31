import fastify from 'fastify'
import cors from '@fastify/cors'
import { ZodError } from 'zod'
import { env } from '@/env'
import { productRoutes } from '@/Adapter/controllers/product/route'
import { left } from './cors/either'


export const app = fastify()

app.register(cors, { })

app.register(productRoutes)

app.setErrorHandler((error, _, reply) => {

  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'validation Error ', inssues: error.format() })
  }

  if (env.NODE_ENV != 'dev')
    console.error(error)

  if(error instanceof left){
    return reply
      .status(400)
      .send({ message: error })
  }
  else
    // Todo heere we should log to on external tool like DataDog/NewRelic/Sentry

    return reply.status(500).send({ message: 'Internal server error.' })
})