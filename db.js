import ItemModel from './models/Item'
import ListModel from './models/List'
import {addDays} from 'date-fns'
import fs from 'fs'

import Sequelize from 'sequelize'

let storagePath = './.data/database.sqlite'

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
    console.log('---Populating Database---')
    await populateDb(data)
    console.log('---Population Complete---')
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
        title: 'Develop Modal Form Component',
        description: 'Set up functionality for the modal form',
        dueDate: makeDate(2)
      },
    ]
  }, {
    title:'Complete',
    items: [
      {
        title: 'Implement web storage',
        description: 'Set up customizations using localstorage.',
        dueDate: makeDate(3)
      },
      {
        title: 'Create Form Validation Class',
        description: 'Implement common validation schemes into reusable class.',
        dueDate: makeDate(2)
      },
      {
        title: 'Research necessary a11y expectations',
        description: 'Determine the needed a11y requirements for the project',
        dueDate: makeDate(1)
      }
    ]
  }]

  // export const resetDB = (connection) => {

  // }