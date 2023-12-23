import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

export const createApp = (): express.Application => {
  const app = express()

  // Logger Middleware
  app.use(morgan('tiny'))

  app.use(cors())
  app.use(express.json())
  app.use(
    express.urlencoded({
      extended: true
    })
  )

  // API Routes
  app.use('/api/', (_, res) => {
    res.send('Hello World!!')
  })

  app.use('/health', (_, res) => {
    res.send('OK')
  })

  return app
}
