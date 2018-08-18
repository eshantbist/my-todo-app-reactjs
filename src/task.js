import React, { Component } from 'react';
import style from'./css/task.css';

export default class tasks extends Component {
  render() {
    return(
      <ul>
        { this.props.todos.map((todo, index) => {
          return<li  key={todo} className="container">{todo}<button onClick={(e) => { this.props.removeItem(index)}} className="floater">X</button></li>
        })}
      </ul>
    );
  }
}