import React, { Component } from 'react';
import './App.css';

function RecipeList(props) {
  const recipes = props.recipes;
  const recipeList = recipes.map((recipe) =>
    <li key={recipe.name}>
      <div className="collapsible-header">{recipe.name}</div>
      <div className="collapsible-body"><span>{recipe.ingredients}</span></div>
    </li>
  );

  return (
    <ul className="collapsible popout" data-collapsible="accordion">{recipeList}</ul>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: props.recipes,
      newRecipeName: "",
      newRecipeIngredients: ""
    };
  }

  add = () => {
    let recipes = this.props.recipes;
    let recipeName = this.state.newRecipeName;
    let ingredients = this.state.newRecipeIngredients.split(',');

    // Clear the inputs

    // Push new recipe into the Box
    recipes.push({
      name: recipeName,
      ingredients: ingredients
    });

    console.log(recipes);

    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.setState({ recipes: recipes });
  }

  handleChange = (event) => {
    console.log(event.target);

    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h4>Welcome to Recipe Box</h4>
        </div>
        <div className="row">
          <RecipeList recipes={this.props.recipes} />
        </div>
        <a href="#modal1" className="waves-effect waves-light btn">
          Add Recipe
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
