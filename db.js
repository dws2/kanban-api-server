import * as typeorm from 'typeorm'
import ItemModel from './models/Item'
import ListModel from './models/List'
import {addDays} from 'date-fns'
import fs from 'fs'

import Sequelize from 'sequelize'

const db = new Sequelize('db','user','pass', {
  dialect: 'sqlite',
  storage: './database.sqlite'
})

export const Item = ItemModel(db, Sequelize)
export const List = ListModel(db, Sequelize)

List.hasMany(Item)

db.sync({ force: true})
  .then(() => {
    console.log('DB and Tables created')
    List.create({title: 'Backlog'})
      .then(list => {
        Item.create(
          {
            "dueDate": "2018-08-05T16:07:15.161Z",
            "listId": list.id,
            "title": "Validated item!",
            "description": "this is a validated item added"
          }
        )
      })
    List.create({title: 'Active'})
    List.create({title: 'Complete'})
  })



// export const db = () => {
//   let exists = fs.existsSync('./database.sqlite') ? true : false
  
//   return typeorm.createConnection({
//     type: "sqlite",
//     database: "./database.sqlite",
//     logging: false,
//     synchronize: true,
//     entities: [
//       ItemSchema, ListSchema
//     ]
//   })
//   .then( connection => {
//     if (!exists) {
//       return populateDb(connection)
//     }
//     return connection
//   })
// }

// export const populateDb = (connection) => {
//   data.forEach(list => {
//     const {title, items} = list
//     connection.getRepository('List').save({title: title})
//       .then( newList => {
//         items.forEach(item => {
//           const newItem = Object.assign({}, item, {list: newList.id})
//           connection.getRepository('Item').save(newItem)
//         })
//       })
//   })
// }

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

  // export const resetDB = (connection) => {

  // }