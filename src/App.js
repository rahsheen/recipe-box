import React, { Component } from 'react';
import './App.css';

class RecipeList extends Component {
  render () {
    return (
    <ul className="list-group">
      <li>Recipes</li>
    </ul>
    );
  }
}

class App extends Component {
  getInitialState() {
    return {
        todos: this.props.todos
      };
  }

  render() {
    var recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    return (
      <div className="App">
        <div className="App-header">
          <h4>Welcome to Recipe Box</h4>
        </div>
        <RecipeList recipes={recipes} />
        <a href="#modal1" className="waves-effect waves-light btn">
          Add Recipe
        </a>
      </div>
    );
  }
}

export default App;
