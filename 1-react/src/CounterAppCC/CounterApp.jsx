import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Count: 0</h1>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Increment By 2</button>
        <button>Increment If Even</button>
      </div>
    );
  }
}

export default Counter;
