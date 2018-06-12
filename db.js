import * as typeorm from 'typeorm'
import { ItemSchema, ListSchema} from './entities'
import {addDays} from 'date-fns'
import fs from 'fs'

export const db = () => {
  let exists = fs.existsSync('./database.sqlite') ? true : false
  
  return typeorm.createConnection({
    type: "sqlite",
    database: "./database.sqlite",
    logging: true,
    synchronize: true,
    entities: [
      ItemSchema, ListSchema
    ]
  })
  .then( connection => {
    if (!exists) {
      return populateDb(connection)
    }
    return connection
  })
}

export const populateDb = (connection) => {
  data.forEach(list => {
    const {title, items} = list
    connection.getRepository('List').save({title: title})
      .then( newList => {
        items.forEach(item => {
          const newItem = Object.assign({}, item, {list: newList.id})
          connection.getRepository('Item').save(newItem)
        })
      })
  })
}

const makeDate = (offset) => addDays(new Date(), offset)

  const data = [{
    title: 'Backlog',
    items: [
      {
        title: 'Set up Automation',
        description: 'Implement gulp or similar taskrunner to process css.',
        dueDate: makeDate(7)
      },
      {
        title: 'Create sass features',
        description: 'Set up sass structure, add variables, create mixins, create placeholders, nest useful blocks.',
        dueDate: makeDate(10)
      },
      {
        title: 'Research API Usage',
        description: 'Read over API documentation and plan CRUD actions.',
        dueDate: makeDate(7)
      },
    ]
  },{ 
    title: 'Implementation',
    items: [

    ]
  }, {
    title:'Complete',
    items: [

    ]
  }]