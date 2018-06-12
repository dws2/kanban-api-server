import express from 'express'
import * as actions from './item.actions'

export const itemRouter = express.Router()

itemRouter.route('/')
  .get(actions.getAll)
  .post(actions.addOne)

itemRouter.route('/:id')
  .put(actions.updateOne)
  .delete(actions.deleteOne)
