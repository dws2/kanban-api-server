import { EntitySchema } from 'typeorm'
import { List } from '../models/List'
import { Item } from '../models/Item'

export const ListSchema = new EntitySchema({
  name: "List",
  target: List,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    title: {
      type: "varchar"
    }
  },
  relations: {
    items: {
      target: "Item",
      type: "one-to-many",
      inverseSide: "list"
    }
  }
})

export const ItemSchema = new EntitySchema({
  name: "Item",
  target: Item,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    title: {
      type: "varchar"
    },
    description: {
      type: "text",
      nullable: true
    },
    dueDate: {
      type: "datetime",
      nullable: true
    }
  },
  relations: {
    list: {
      target: "List",
      type: "many-to-one",
      inverseSide: "items"
    }
  }
})