import { Request, Response, NextFunction } from 'express'

export const logger = (request: Request, _response: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('%s %s', request.method, request.url)
    console.log('connection from: ' + request.ip)
  }
  next()
}
