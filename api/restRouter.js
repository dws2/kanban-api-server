import express from 'express'
import {apiErrorHandler} from './errors'
import { listRouter } from './list/list.router'
import { itemRouter } from './item/item.router'
export const restRouter = express.Router()

restRouter.use('/lists', listRouter)
restRouter.use('/items', itemRouter)
restRouter.use(apiErrorHandler)