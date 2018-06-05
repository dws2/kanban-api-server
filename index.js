import express from "express"
import bodyParser from 'body-parser'
import * as typeorm from 'typeorm'
import { Item } from "./src/models/Item"
import { List } from './src/models/List'
import { ItemSchema, ListSchema} from './src/entity'
const app = express()
app.use(bodyParser.json())
const PORT = 3000

// init database
typeorm.createConnection({
  type: "sqlite",
  database: "./database.sqlite",
  logging: true,
  synchronize: true,
  entities: [
    ItemSchema, ListSchema
  ]
}).then( connection => {
  
  const listRepository = connection.getRepository(List)
  const itemRepository = connection.getRepository(Item)



  app.get('/lists', async (req,res) => {
    listRepository.find({ relations: ["items"]})
      .then( data => res.send(data))
      .catch(err => console.log(err))
  })
  app.post('/lists', async (req,res) => {
    const list = listRepository.create(req.body)
    listRepository.save(list)
      .then( (item) => res.send(item))
  })
  
  app.route('/lists/:id')
    .get((req, res) => {

      res.send('...')
    })
    .put((req, res) => res.send("PUT request successful"))

  app.route('/items')
    .get((req,res) => res.send('Get item currently not supported'))
    .post((req,res) => {
      const item = itemRepository.create(req.body)
      itemRepository.save(item)
        .then( item => res.send(item))
    })
  
  app.get("/", (req, res) => res.send(`Express running on port ${PORT}`))
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

})
.catch( err => console.log(err))