import express from 'express'
import * as actions from './list.actions'



export const listRouter = express.Router()


listRouter.route('/')
  .get(actions.getAll)
  .post(actions.addOne)

listRouter.route('/:id')
  .put(actions.updateOne)
  .delete(actions.deleteOne)
