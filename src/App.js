import React, { Component } from "react"
import "./App.scss"
import "bulma"
import RecipeList from "./components/recipe-list"
import AddRecipe from "./components/AddRecipe"
import EditRecipe from "./components/EditRecipe"

class App extends Component {
  state = {
    recipes: [],
    editIndex: null,
    oldRecipeName: "",
    oldRecipeIngredients: [],
    addingRecipe: false,
    editingRecipe: false
  }

  componentDidMount() {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || []
    console.log(`Loaded recipes`, recipes)
    this.setState({ recipes })
  }

  add = (name, ingredients) => {
    // Refresh our State and reset form inputs
    this.setState(
      {
        recipes: [...this.state.recipes, { name, ingredients }],
        addingRecipe: false
      },
      () => {
        // Update localStorage
        window.localStorage.setItem(
          "recipes",
          JSON.stringify(this.state.recipes)
        )
      }
    )
  }

  edit = (name, ingredients) => {
    let recipeIndex = this.state.editIndex
    let recipes = this.state.recipes

    recipes[recipeIndex] = {
      name: this.state.oldRecipeName,
      ingredients: this.state.oldRecipeIngredients.split(",")
    }

    this.setState({
      recipes
    })

    // Update localStorage
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes))
  }

  handleEdit = editIndex => {
    // Refresh our State and set form inputs
    this.setState({
      editIndex,
      recipe: this.state.recipes[editIndex],
      editingRecipe: true
    })
  }

  handleDelete = recipeIndex => {
    let newRecipes = this.state.recipes.slice()
    newRecipes.splice(recipeIndex, 1)

    this.setState(
      {
        recipes: newRecipes
      },
      () => {
        // Update localStorage
        localStorage.setItem("recipes", JSON.stringify(this.state.recipes))
      }
    )
  }

  render() {
    return (
      <div className="App container">
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Recipe Box</h1>
              <h2 className="subtitle">by: Rahsheen A. Porter</h2>
            </div>
          </div>
        </section>
        <section>
          <RecipeList
            recipes={this.state.recipes}
            handleDelete={this.handleDelete.bind(this)}
            handleEdit={this.handleEdit.bind(this)}
          />
        </section>
        <button
          onClick={() =>
            this.setState({ addingRecipe: !this.state.addingRecipe })
          }
          className="button is-primary is-rounded">
          <span className="icon">
            <i className="fas fa-plus" />
          </span>
        </button>
        <AddRecipe
          onAdd={this.add}
          onCancel={() => this.setState({ addingRecipe: false })}
          isActive={this.state.addingRecipe}
        />
        <EditRecipe
          onEdit={this.edit}
          onCancel={() => this.setState({ editingRecipe: false })}
          isActive={this.state.editingRecipe}
        />
      </div>
    )
  }
}

export default App
