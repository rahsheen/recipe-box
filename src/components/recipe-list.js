import React, { Component } from 'react'
import Recipe from './recipe'

class RecipeList extends Component {
  render () {
    const recipeList = this.props.recipes.map((recipe, i) =>
      <Recipe
        key={i}
        id={i}
        name={recipe.name}
        ingredients={recipe.ingredients}
        handleDelete={this.props.handleDelete}
        handleEdit={this.props.handleEdit}
      />
    )

    return (
      <ul className='collapsible popout' data-collapsible='accordion'>{recipeList}</ul>
    )
  }
}

export default RecipeList
