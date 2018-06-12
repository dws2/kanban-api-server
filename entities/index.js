import { EntitySchema } from 'typeorm'

export const ListSchema = new EntitySchema({
  name: "List",
  
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
      type: "date",
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