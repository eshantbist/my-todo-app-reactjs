import React, { Component } from 'react';
import style from  './css/App.css';
import TodoItem from './todoitem.js';

const ALL_TODOS = 'all';
const ACTIVE_TODOS = 'active';
const COMPLETED_TODOS = 'completed';

export default class Todoapp extends Component 
{
  constructor(props) {
    super(props);
    this.state = { 
      nowShowing:ALL_TODOS,
      editing:null,
      newTodo: ''};
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
      e.preventDefault();
      this.props.models.addTodo(val);
      this.setState({newTodo: ''});
    }
    }


  toggle=(todoToToggle)=> {
      this.props.models.toggle(todoToToggle);
    }

  edit= (todo)=> {
      this.setState({editing: todo.id});
    }

  save= (todoToSave, text)=> {
      this.props.models.save(todoToSave, text);
      this.setState({editing: null});
    }

  cancel= ()=>{
      this.setState({editing: null});
    }
  destroy=(todo)=> {
      this.props.models.destroy(todo);
    }

  render() {
    
      let main;
      let footer; 
      let todos = this.props.models.todos();

      var shownTodos = todos.filter(function (todo) {
        switch (this.state.nowShowing) {
        case ACTIVE_TODOS:
          return !todo.completed;
        case COMPLETED_TODOS:
          return todo.completed;
        default:
          return true;
        }
      }, this);

      let todoItems = shownTodos.map(function (todo) {
        return (
          <TodoItem
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

      let activeTodoCount = todos.reduce(function (accum, todo) {
        return todo.completed ? accum : accum + 1;
      }, 0);

      let completedCount = todos.length - activeTodoCount;


      if (todos.length) {
        main = (
          <section className="main">
            <ul className="todo-list">
              {todoItems}
            </ul>
          </section>
        );
      }



    return(
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
      </div>
    );
  }
}