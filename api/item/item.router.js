import express from 'express'
import * as actions from './item.actions'
import { body } from 'express-validator/check'
import { validate } from '../../middleware/validation'
export const itemRouter = express.Router()

const checks = {
  list: body('list').exists().withMessage('must have a valid list id').isInt(),
  title: body('title').exists().withMessage('must have a title').trim().escape(),
  description: body('description').trim().escape(),
  dueDate: body('dueDate').toDate(),
  id: body('id').exists().withMessage('must provide a valid id')
}

itemRouter.route('/')
  .get(actions.getAll)
  .post(actions.addOne)

itemRouter.route('/:id')
  .get(actions.getOne)
  .put(actions.updateOne)
  .delete(actions.deleteOne)
