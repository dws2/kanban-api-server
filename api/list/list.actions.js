import { lists, getById } from '../utils'

export function getAll(req, res, next) {
  lists().find({ relations: ['items']})
    .then(data => res.json(data))
    .catch(err=>next(err))
}

export function addOne(req,res,next) {
  lists().save(req.body)
    .then( item => res.status(201).send(item))
    .catch(err=>next(err))
}

export function deleteOne(req,res,next) {
  const id = req.params.id
  lists().delete({ id: id})
  .then(() => {
    res.status(201).send(`List ${id} deleted successfully`)
  })
  .catch(err => next(err))
}

export function updateOne(req,res,next) {
  const id = req.params.id
  lists().update(id, req.body)
    .then( async () => {
      const data = await getById(lists, id)
      res.status(201).json(data)
    })
    .catch( err=> next(err))
}