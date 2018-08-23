import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(<App/>, document.getElementById('root'));

 /*ReactDOM.render((
  <BrowserRouter >
    <div>
      <Route path="/" component={App} />
      <Route path="/completed" component={App} />
      
    </div>
  </BrowserRouter>
), document.getElementById('root'))*/
	