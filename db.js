import ItemModel from './models/Item'
import ListModel from './models/List'
import {addDays} from 'date-fns'
import fs from 'fs'

import Sequelize from 'sequelize'

let storagePath = process.env.GLITCH ? './.data/database.sqlite' : './database.sqlite'

const db = new Sequelize('db','user','pass', {
  dialect: 'sqlite',
  storage: storagePath
})

export const Item = ItemModel(db, Sequelize)
export const List = ListModel(db, Sequelize)

List.hasMany(Item)
export const resetDB = () => {
  return db.sync({ force: true})
  .then(async () => {
    console.log('DB and Tables created')
    console.time('---Populating Database---')
    await populateDb(data)
    console.timeEnd('---Population Complete---')
    // List.create({title: 'Backlog'})
    //   .then(list => {
    //     Item.create(
    //       {
    //         "dueDate": "2018-08-05T16:07:15.161Z",
    //         "listId": list.id,
    //         "title": "Validated item!",
    //         "description": "this is a validated item added"
    //       }
    //     )
    //   })
    // List.create({title: 'Active'})
    // List.create({title: 'Complete'})
  })
}

resetDB()

export const populateDb = (data) => {
  data.forEach(list => {
    const {title, items} = list
    List.create({title: title})
      .then( newList => {
        items.forEach(item => {
          const newItem = Object.assign({}, item, {listId: newList.id})
          Item.create(newItem)
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
      {
        title: 'Connect front end',
        description: 'Connect UI to API endpoints. Implement all crud actions',
        dueDate: makeDate(7)
      },
      {
        title: 'Abstract repeated sass functionality',
        description: 'Abtract repeated code into variables, mixins, or placeholders',
        dueDate: makeDate(5)
      },
      {
        title: 'Research API Usage',
        description: 'Read over API documentation and plan CRUD actions.',
        dueDate: makeDate(7)
      },
    ]
  }, {
    title:'Complete',
    items: [
      {
        title: 'Research API Usage',
        description: 'Read over API documentation and plan CRUD actions.',
        dueDate: makeDate(7)
      },
      {
        title: 'Research API Usage',
        description: 'Read over API documentation and plan CRUD actions.',
        dueDate: makeDate(7)
      },
      {
        title: 'Research API Usage',
        description: 'Read over API documentation and plan CRUD actions.',
        dueDate: makeDate(7)
      },
      {
        title: 'Research API Usage',
        description: 'Read over API documentation and plan CRUD actions.',
        dueDate: makeDate(7)
      },
      {
        title: 'Research API Usage',
        description: 'Read over API documentation and plan CRUD actions.',
        dueDate: makeDate(7)
      },
      {
        title: 'Research API Usage',
        description: 'Read over API documentation and plan CRUD actions.',
        dueDate: makeDate(7)
      },
    ]
  }]

  // export const resetDB = (connection) => {

  // }