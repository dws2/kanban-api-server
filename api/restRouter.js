import express from 'express'
import {apiErrorHandler} from './errors'
import { listRouter } from './list/list.router'
import { itemRouter } from './item/item.router'
import {resetDB} from '../db'
export const restRouter = express.Router()

restRouter.use('/lists', listRouter)
restRouter.use('/items', itemRouter)
restRouter.get('/reset', (req,res) => {resetDB().then( () => res.send('DB Reset'))})
restRouter.use(apiErrorHandler)
