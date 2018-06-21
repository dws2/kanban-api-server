
import { Item} from '../../db'

export function getAll({req, res, next}) {
  Item.findAll()
    .then(items => res.json(items))
    .catch(err=>next(err))
}

export function getOne(req,res,next) {
  const id = req.params.id
  Item.findById(id)
    .then(item => res.json(item))
    .catch( err=> console.log(err))
}

export function addOne(req,res,next) {
  Item.create(req.body)
    .then( item => res.status(201).send(item))
    .catch(err=>next(err))
}

export function deleteOne(req,res,next) {
  const id = req.params.id
  Item.findById(id)
    .then(item => {
      return item.destroy()
    })
  .then(() => {
    res.status(200).send(`Item ${id} deleted successfully`)
  })
  .catch(err => next(err))
}

export function updateOne(req,res,next) {
  const id = req.params.id
  Item.findById(id)
    .then(item =>{
      return item.update(req.body)
    })
    .then(update => res.status(201).json(update))
    .catch( err=> next(err))
}