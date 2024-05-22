## 0-node

### Setup

Run `npm install` to install dependencies.

Use node to run javascript files.

```bash
node 0-example.js
```

### Tasks

#### 0-example.js

This is a sample setup for redux. Make sure you can run the file and see the state change in the output.

#### 1-counter.js

Implement state for a counter app. Actions to imlement:

- Increment: when called the state value increases by one.
- Decrement: when called the state value decreases by one.
- Increment By: when called the state value increases by the number passed in the payload.
- Increment If Even: when called the state value increases by one if the state value is even.

#### 2-todo.js

Implement state for a todo app. Actions to implement:

- Add Todo: when called the todo passed into the action is added to the list of todos in the state.
- Complete Todo: when called the id passed into the action is removed from the list of todos in the state.

#### 3-shopping-cart.js

Implement state for a shopping cart app. Actions to implement:

- Add Item: when called the item passed into the action is added to the cart and the inventory is updated appropriately.
- Remove Item: when called the item passed into the action is removed from the cart and the inventory is updated appropriately.

## 1-react

### Setup

Run `npm install` to install dependencies.

Run `npm run dev` to start the development server.

### Tasks

#### CounterAppCC

Implement a counter app using the class component. Reuse the store and reducer from `0-node`.

#### CounterAppFC

Implement a counter app using the functional component. Reuse the store and reducer from `0-node`.

#### ToDoApp

IMplement the todo app using the functional component. Reuse the store and reducer from `0-node`.
