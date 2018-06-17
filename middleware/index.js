import bodyParser from 'body-parser'
import cors from 'cors'
import {authenticate} from './auth'
export const setupMiddleware = (app) => {
  app.use(cors({ "origin": "*", "preflightContinue": true}))
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(authenticate)
}