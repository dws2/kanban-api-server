# Kanban API Server

This server acts as the backend for student projects.

## Getting Started

If you haven't already, remix this server into your own Glitch instance. Detailed instructions can be found in the assignment.

### Locations

The API is available at `https://YOUR-GLITCH-PROJECT-NAME.glitch.me/api`. Responses are sent as JSON.

For example, if your project on glitch is called "coconut-peony", your api path will be `https://coconut-peony.glitch.me/api`.

### HTTP Verbs

| Verb   | Actions                 |
| ------ | ----------------------- |
| GET    | Retrieves a resource(s) |
| POST   | Creates a resource      |
| PUT    | Updates a resource      |
| DELETE | Deletes a resource      |

## Authorization

All actions require that the request be authorized with a provided `accessToken` parameter. For example:

```
https://YOUR-GLITCH-PROJECT.glitch.me/api/lists?accessToken=YOUR_ACCESS_TOKEN
```

For the purpose of this project, your access token is **5b1064585f4ab8706d275f90**

Unauthorized requests will result in a `401` error response.

___

# Endpoints

- [Lists](#lists)
  - [Get All Lists](#get-all-lists)
  - [Create New List](#create-a-new-list)
  - [Update a List](#update-a-list)
  - [Delete a List](#delete-a-list)
- [Items](#items)
  - [Get All Items](#get-all-items)
  - [Create New Item](#create-a-new-item)
  - [Update a Item](#update-an-item)
  - [Delete a Item](#delete-an-item)

## Lists

### Get all lists
```
GET /lists
```
Returns an array of all lists and their items.

Response:

```js
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

### Create a new list
```
POST /lists
```
Adds a new task list.

#### Parameters

| Name  | Type     | Description                          |
| ----- | -------- | ------------------------------------ |
| title | `string` | The title of the new list (required) |

#### Example

```js

POST /lists

{
  "title": "Completed Items"
}
```

#### Response

```js
{
  "id": 1, // Auto generated list id
  "title": "Completed Items" // Title provided by the request
}
```

### Update a list
```
PUT /lists/:id
```
Update the list with the supplied `id`.

#### Parameters

| Name  | Type     | Description                          |
| ----- | -------- | ------------------------------------ |
| title | `string` | The title of the new list (required) |

#### Example

```js

PUT /lists/1

{
  "title": "Completed Items"
}
```

#### Response

```js
{
  "id": 1,
  "title": "Completed Items"
}
```

### Delete a list
```
DELETE /lists/:id
```

Deletes the list with the supplied `id`.

#### Example
```
DELETE /lists/3
```

#### Response

```
List 3 deleted successfuly 
```

---

## Items

### Get all Items
```
GET /items
```

Returns all items in an array:

```js
[
  // ...
  {
    "id": 1,
    "title": "Update CSS Properties",
    "description": "Complete the required changes to fix page css.",
    "dueDate": "2018-08-05",
    "listId": 1
  }
  // ...
]
```

### Create a new item
```
POST /items
```
Adds a new item to a list.

#### Parameters

| Name        | Type      | Description                                                          |
| ----------- | --------- | -------------------------------------------------------------------- |
| title       | `string`  | The title of the new item (required)                                 |
| listId      | `integer` | The id of the list the item will be added to (required)              |
| dueDate     | `string`  | A date formatted string of the due date (optional, defaults to null) |
| description | `string`  | Item description (optional)                                          |

#### Example

```js
{
  "title": "A new todo item",
  "listId": 1,
  "description": "This is an example of the todo description",
  "dueDate": "2018-08-05"
}
```

#### Response

```js
{
  "id": 9,
  "title": "A new todo item",
  "listId": 1,
  "description": "This is an example of the todo description",
  "dueDate": "2018-08-05"
}
```

### Update an item
```
PUT /items/:id
```
Updates the item with the supplied `id`
#### Parameters

| Name        | Type     | Description                                        |
| ----------- | -------- | -------------------------------------------------- |
| title       | `string` | The title of the new item (required)               |
| dueDate     | `string` | A date formatted string of the due date (optional) |
| description | `string` | Item description (optional)                        |

#### Example

```js

PUT /items/9

{
  "title": "An updated todo item",
  "description": "This is an example of the todo description",
  "dueDate": "2018-08-05"
}
```

#### Response

```js
{
  "id": 9,
  "title": "An updated todo item",
  "listId": 1,
  "description": "This is an example of the todo description",
  "dueDate": "2018-08-05"
}
```

### Delete an item
```
DELETE /items/:id
```
Deletes the item with the supplied `id`.
