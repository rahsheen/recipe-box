import React, { Component } from 'react';
import './App.css';

import RecipeList from './components/recipe-list'

class App extends Component {
  constructor(props) {
    super(props);

    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    this.state = {
      recipes: recipes,
      editIndex: null,
      newRecipeName: "",
      newRecipeIngredients: "",
      oldRecipeName: "",
      oldRecipeIngredients: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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

    // Refresh our State and reset form inputs
    this.setState({
      recipes: recipes,
      newRecipeName: "",
      newRecipeIngredients: ""
    });

    // Update localStorage
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
  }

  edit = (e) => {
    e.preventDefault();

    let recipeIndex = this.state.editIndex;
    let recipes = this.state.recipes;
    let recipeName = this.state.oldRecipeName;
    let ingredients = this.state.oldRecipeIngredients.split(",");

    console.log(ingredients);

    recipes[recipeIndex] = {
      name: recipeName,
      ingredients: ingredients
    };

    this.setState({
      recipes: recipes
    });

    // Update localStorage
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
  }

  handleEdit(recipeIndex) {
    // Refresh our State and set form inputs
    this.setState({
      editIndex: recipeIndex,
      oldRecipeName: this.state.recipes[recipeIndex].name,
      oldRecipeIngredients: this.state.recipes[recipeIndex].ingredients.join(',')
    });
  }

  handleDelete(recipeIndex) {

    let newRecipes = this.state.recipes.slice();
    newRecipes.splice(recipeIndex, 1);

    this.setState({
      recipes: newRecipes
    });

    // Update localStorage
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
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
        <div>
          <RecipeList recipes={this.state.recipes} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
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
        <div id="editModal" className="modal">
          <div className="modal-content">
            <h4>Edit Recipe</h4>
            <div className="input-field">
              <label htmlFor="recipeName">Recipe Name</label>
              <input
                type="text"
                id="oldRecipeName"
                onChange={this.handleChange}
                value={this.state.oldRecipeName}
              />
            </div>
            <div className="input-field">
              <label htmlFor="ingredients">Ingredients (comma-separated)</label>
              <input
                onChange={this.handleChange}
                id="oldRecipeIngredients"
                type="text"
                value={this.state.oldRecipeIngredients}
              />
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" onClick={this.edit} className="modal-action modal-close waves-effect waves-green btn-flat">Save</a>
            <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat">Cancel</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
