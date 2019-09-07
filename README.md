# To Do List Microservice Server Example
[![npm version](https://badge.fury.io/js/%40andrewsosa%2Ftodo-server.svg)](https://badge.fury.io/js/%40andrewsosa%2Ftodo-server)

A todo list API microservice in <100 lines of Javascript.


### Usage
The API repsonds to GET, POST, PATCH, DELETE at any route.

* GET: Returns list of all todos
* POST: Create a todo
* PATCH: Change a todo's done status.
* DELETE: Remove a todo.

```js
const API = "http://localhost:3000";

// Create a todo
axios
  .post(API, { todo: "Finish side project" })
  .then(resp => resp.data)
  .then(data => console.log(data));
  //    {
  //      total: 1,                                 // total todos
  //      id: 'dad11e35bef81e7620fae012cbbf65f6',   // random id
  //      done: false,                              // status
  //      todo: 'finish side project'               // original text
  //    }

// Get all todos
axios
  .get(API)
  .then(resp => resp.data)
  .then(data => console.log(data));
  // [
  //     {
  //         id: 'dad11e35bef81e7620fae012cbbf65f6',
  //         done: false,
  //         todo: 'finish side project'
  //     },
  //     {
  //         id: '57e130216cb5aba21ec33f971b598985',
  //         done: false,
  //         todo: 'finish side project'
  //     },
  //     ...
  // ]

// Update a todo's done status
axios
  .patch(API, { id: "57e130216cb5aba21ec33f971b598985", done: "true" })
  .then(resp => console.log(resp.status));
  // 202 (no response body, only status code)

// Remove a todo
axios
  .delete(API, { data: { id: "57e130216cb5aba21ec33f971b598985" } })
  .then(resp => console.log(resp.status));
  // 202 (no response body, only status code)

```
