import express from 'express'
import * as actions from './list.actions'
import { body } from 'express-validator/check'
import { validate } from '../../middleware/validation'


export const listRouter = express.Router()

const checks = {
  title: body('title').exists().withMessage('must have a title').trim().escape(),
  id: body('id').exists().withMessage('must have a valid id')
}

listRouter.route('/')
  .get(actions.getAll)
  .post([
    checks.title,
    validate
  ],actions.addOne)

listRouter.route('/:id')
  .put([
    checks.title,
    validate
  ],actions.updateOne)
  .delete(actions.deleteOne)
