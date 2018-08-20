import React, { Component } from 'react';
import style from  './css/todoitem.css';
import Utils from './utils.js';

export default class TodoItem extends Component 
{		

	render(){
		const activeTodoWord = Utils.pluralize(this.props.count, 'item');
		let clearButton = null;

		if (this.props.completedCount > 0) {
			    clearButton = (
					<button
						className="clear-completed"
						onClick={this.props.onClearCompleted}>
						Clear completed
					</button>
				);
		}

			let nowShowing = this.props.nowShowing;

			return (
				<footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {activeTodoWord} left
					</span>
					<ul className="filters">
						<li>
							<a
								href="#/"
								className="selected">
									All
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/active"
								className="selected">
									Active
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/completed"
								className="selected">
									Completed
							</a>
						</li>
					</ul>
					{clearButton}
				</footer>
			)
		}    
}