import React, { Component } from 'react';
import style from  './css/style.css';
import TodoItem from './todoitem.js';
import Model from './model';
import TodoFooter from './todofooter.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const ALL="all";

export default class TodoApp extends Component 
{
  constructor(props) {
    super(props);
    this.state = { 
      editing:null,
      newTodo: '',
      status:ALL};
    this.models=new Model();
  }
  

  handleChange=(e)=>{
    this.setState({ newTodo: [e.target.value]})
  }   

  handleKeydown=(e)=>{
    if(e.keyCode!==13) 
    {
      return;
    }

    const val=this.state.newTodo.toString();

    console.log(val);

    if(val)
    { 
      if(val===" ")
      {
        return;
      }
      this.models.addTodo(val);
      this.setState({newTodo: ''});
    }
    }


  toggle=(todoToToggle)=> {
      this.models.toggle(todoToToggle);
      this.setState({editing:null});
    }

  edit= (todo)=> {
      this.setState({editing: todo.id});
    }

  save= (todoToSave, text)=> {
      this.models.save(todoToSave, text);
      this.setState({editing: null});
    }

  cancel= ()=>{
      this.setState({editing: null});
    }
  destroy=(todo)=> {
      this.models.destroy(todo);
      this.setState({editing:null});
    }

  render() {
    
      let main; 
      let footer;
      let todos = this.models.todos();

      let todoItems = todos.map(function (todo) {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={this.edit.bind(this, todo)}
            editing={this.state.editing === todo.id}
            onCancel={this.cancel}
            onSave={this.save.bind(this, todo)}
            onDestroy={this.destroy.bind(this, todo)}
            onToggle={this.toggle.bind(this, todo)}
          />
        );
      }, this);


      if (todos.length) {
        main = (
          <section className="main">
            <ul className="todo-list">
              {todoItems}
            </ul>
          </section>
        );
      }

      if (todos.length) {
        footer =
          <TodoFooter
          />;
      }



    return(
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>MY-TODOS</h1> 
          </header>
            <input 
              className="new-todo" 
              value={this.state.newTodo} 
              placeholder="Your Tasks?" 
              onKeyDown={this.handleKeydown} 
              onChange={this.handleChange}>
            </input>
            {main}
            {footer}
        </div>
      </BrowserRouter>
    );
  }
}