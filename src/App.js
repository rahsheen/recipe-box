import React, { Component } from 'react';
import './App.css';

import RecipeList from './components/recipe-list'

class App extends Component {
  constructor(props) {
    super(props);

    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    this.state = {
      recipes: recipes,
      newRecipeName: "",
      newRecipeIngredients: ""
    };
  }

  add = (e) => {
    e.preventDefault();

    let recipes = this.state.recipes;
    let recipeName = this.state.newRecipeName;
    let ingredients = this.state.newRecipeIngredients.split(',');

    // Push new recipe into the Box
    recipes.push({
      name: recipeName,
      ingredients: ingredients
    });

    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.setState({
      recipes: recipes,
      newRecipeName: "",
      newRecipeIngredients: ""
    });
  }

  delete(e) {
    e.preventDefault();

    
  }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <h4>Welcome to Recipe Box</h4>
        </div>
        <div className="row">
          <RecipeList recipes={this.state.recipes} />
        </div>
        <a href="#modal1" className="waves-effect waves-light btn-floating btn-large">
          <i className="material-icons">add</i>
        </a>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Add Recipe</h4>
            <div className="input-field">
              <label htmlFor="recipeName">Recipe Name</label>
              <input type="text" id="newRecipeName" onChange={this.handleChange} value={this.state.newRecipeName} />
            </div>
            <div className="input-field">
              <label htmlFor="ingredients">Ingredients (comma-separated)</label>
              <input onChange={this.handleChange} id="newRecipeIngredients" type="text" value={this.state.newRecipeIngredients} />
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" onClick={this.add} className="modal-action modal-close waves-effect waves-green btn-flat">Add</a>
            <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat">Cancel</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
