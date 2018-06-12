# Kanban API Server

## Endpoints

### `GET /lists`

Returns an array of all lists and their items

Example response:

```json
[
  // ...
  {
    "id": 3,
    "title": "Backlog",
    "items": [
      {
        "id": 1,
        "title": "Create sass features",
        "description":
          "Set up sass structure, add variables, create mixins, create placeholders, nest useful blocks.",
        "dueDate": "2018-06-17"
      },
      {
        "id": 2,
        "title": "Research API Usage",
        "description": "Read over API documentation and plan CRUD actions.",
        "dueDate": "2018-06-14"
      },
      {
        "id": 3,
        "title": "Set up Automation",
        "description": "Implement gulp or similar taskrunner to process css.",
        "dueDate": "2018-06-14"
      }
      // ...
    ]
  }
  // ...
]
```

<!-- ### `GET /items`

Returns all items in an array:

```js
[
  {

  }
  // ...
]
``` -->

### `POST /items`

Expects an object as follows:

- `title: STRING` - Item title as a string. (REQUIRED)
- `list: INT` - Parent list ID as an integer (REQUIRED)
- `dueDate: STRING` - Due date of the item formated as a DATE readable string (optional)
- `description: STRING` - Description of the item (optional)

example:

```json
{
  "title": "A new todo item",
  "list": 1,
  "description": "This is an example of the todo description",
  "dueDate": "2018-08-05"
}
```

Returns complete item object with assigned id. Example:

```json
{
  "id": 9,
  "title": "A new todo item",
  "list": 1,
  "description": "This is an example of the todo description",
  "dueDate": "2018-08-05"
}
```

### `PUT /items/:id`
