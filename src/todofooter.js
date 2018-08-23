import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, HashRouter, BrowserRouter } from 'react-router-dom';

export default class TodoFooter extends Component 
{	

		render(){
			return (
				<footer className="footer">
					<ul className="filters">
						<li>
							<Link to="/" className="all">All</Link>
							
						</li>
						<li>
							<Link to="/active" className="active">Active</Link>
							
						</li>
						<li>
							<Link to="/completed" className="completed">Completed</Link>
							
						</li>
					</ul>
				</footer>
			)
		}

}
