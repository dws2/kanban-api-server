import bodyParser from 'body-parser'
import {authenticate} from './auth'
export const setupMiddleware = (app) => {
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(authenticate)
}