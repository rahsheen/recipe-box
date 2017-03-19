import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var recipes = JSON.parse(localStorage.getItem('recipes')) || [];

ReactDOM.render(
  <App recipes={recipes}/>,
  document.getElementById('root')
);
