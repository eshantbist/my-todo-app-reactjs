import React, { Component } from 'react';
import style from  './css/todoitem.css';

export default class TodoItem extends Component 
{		

		constructor(){
			super();
			this.state={
				editText: ''
			}
		}
		handleEdit= ()=> {
			this.props.onEdit();
			this.setState({editText: this.props.todo.title});
		}
		handleKeyDown= (e)=> {
			if (e.which === 27) {
				this.setState({editText: this.props.todo.title});
				this.props.onCancel(e);
			} else if (e.which === 13) {
				this.handleSubmit(e);
			}
		}
		handleChange=(e)=> {
			if (this.props.editing) {
				this.setState({editText: e.target.value});
			}
		}
		handleSubmit=(e)=> {
			var val = this.state.editText;
			if (val) {
				this.props.onSave(val);
				this.setState({editText: val});
			} else {
				this.props.onDestroy();
			}
		}


		render() {

			let classNames="";
			if(this.props.todo.completed===true)
			{classNames="completed";}
			else if(this.props.editing===true)
			{classNames="editing";}

			return (
				<li className={classNames}>
					<div className="view">
						<label onDoubleClick={this.handleEdit}>
							{this.props.todo.title}
						</label>
					</div>
					<input
						className="edit"
						value={this.state.editText}
						onBlur={this.handleSubmit}
						onChange={this.handleChange}
						onKeyDown={this.handleKeyDown}
					/>
				</li>
			)
		}

}
