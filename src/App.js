import React, { Component } from 'react';
import style from  './css/style.css';
import TodoItem from './todoitem.js';

export default class Todoapp extends Component 
{
  constructor(props) {
    super(props);
    this.state = { 
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
      let todos = this.props.models.todos();

      let todoItems = todos.map(function (todo) {
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