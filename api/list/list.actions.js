import { List, Item} from '../../db'
export function getAll(req, res, next) {
  List.findAll({
    include: [{
      model: Item
    }]
  }).then( lists => {
    res.json(lists)
  })
}

export function addOne(req,res,next) {
  List.create(req.body)
    .then( item => res.status(201).send(item))
    .catch(err=>next(err))
}

export function deleteOne(req,res,next) {
  const id = req.params.id
  List.findById(id)
    .then(list => {
      return list.destroy()
    })
  .then(() => {
    res.status(201).send(`List ${id} deleted successfully`)
  })
  .catch(err => next(err))
}

export function updateOne(req,res,next) {
  const id = req.params.id
  List.findById(id)
    .then(list => {
      return list.update(req.body)
    })
    .then(update => res.status(201).json(update))
    .catch( err=> next(err))
}