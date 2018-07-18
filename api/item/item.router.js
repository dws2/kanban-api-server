import express from 'express'
import * as actions from './item.actions'
export const itemRouter = express.Router()

itemRouter.route('/')
  .get(actions.getAll)
  .post(actions.addOne)

itemRouter.route('/:id')
  .get(actions.getOne)
  .put(actions.updateOne)
  .delete(actions.deleteOne)
