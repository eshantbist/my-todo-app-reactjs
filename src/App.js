import React, { Component } from 'react';
import Tasks from './task.js';
import style from  './css/App.css';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], text: '' };
    this.removeItem = this.removeItem.bind(this)
  }
  
   handleChange=(e)=>{
    this.setState({ text: [e.target.value]})
  }   

  handleKeydown=(e)=>{
    if(e.keyCode!==13) 
    {
      return;
    }

    const val=this.state.text;

    if(val)
    { 
      if(val===" ")
      {
        return;
      }
      e.preventDefault();
      this.setState({ todos: [ this.state.text, ...this.state.todos ], text: '' });
    }

    }
  removeItem(index) {
    const todos = this.state.todos.filter((todo,todoIndex) => {
      return todoIndex !== index;
    })
    this.setState({ todos })
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <h1>MY-TODOS</h1> 
        </header>
          <input className="new-todo" value={this.state.text} placeholder="Your Tasks?" onKeyDown={this.handleKeydown} onChange={this.handleChange}/>
        <Tasks todos={this.state.todos} removeItem={this.removeItem} />
      </div>
    );
  }
}
