import express from 'express'
import * as actions from './list.actions'
import { body } from 'express-validator/check'



export const listRouter = express.Router()

const checks = {
  title: body('title').exists().withMessage('must have a title').trim().escape(),
  id: body('id').exists().withMessage('must have a valid id')
}

listRouter.route('/')
  .get(actions.getAll)
  .post(actions.addOne)

listRouter.route('/:id')
  .put(actions.updateOne)
  .delete(actions.deleteOne)
