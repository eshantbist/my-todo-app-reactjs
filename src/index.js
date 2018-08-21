import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Model from './model';

const m=new Model();
ReactDOM.render(<App models={m}/>, document.getElementById('root'));

