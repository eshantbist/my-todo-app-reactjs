import React, { Component } from 'react';
export default class TodoFooter extends Component 
{	

		render(){
			return (
				<footer className="footer">
					<ul className="filters">
						<li>
							<a href="#/"className="all">All</a>
						</li>
						<li>
							<a href="#/active" className="active">Active</a>
						</li>
						<li>
							<a href="#/completed" className="completed">Completed</a>
						</li>
					</ul>
				</footer>
			)
		}

}
