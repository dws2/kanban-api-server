import { items, getById } from '../utils'

export function getAll({req, res, next}) {
  items().find({ relations: ['list']})
    .then(data => res.json(data))
    .catch(err=>next(err))
}

export function addOne(req,res,next) {
  items().save(req.body)
    .then( item => res.status(201).send(item))
    .catch(err=>next(err))
}

export function deleteOne(req,res,next) {
  const id = req.params.id
  items().delete({ id: id})
  .then(() => {
    res.status(201).send(`Item ${id} deleted successfully`)
  })
  .catch(err => next(err))
}

export function updateOne(req,res,next) {
  const id = req.params.id
  items().update(id, req.body)
    .then( async () => {
      const data = await getById(items, id)
      res.status(201).json(data)
    })
    .catch( err=> next(err))
}