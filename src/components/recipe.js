import React, { Component } from "react"

class Recipe extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  renderIngredients(ingredients) {
    console.log(`Rendering ingredients`, ingredients)
    const ingredientsList =
      Array.isArray(ingredients) &&
      ingredients.map((ingredient, i) => (
        <li key={ingredient} className="collection-item">
          {ingredient}
        </li>
      ))

    return <ul className="collection">{ingredientsList}</ul>
  }

  handleDelete(e) {
    e.preventDefault()

    this.props.handleDelete(this.props.id)
  }

  handleEdit(e) {
    e.preventDefault()

    this.props.handleEdit(this.props.id)
  }

  render() {
    return (
      <li>
        <div className="collapsible-header">
          <h5>{this.props.name}</h5>
        </div>
        <div className="collapsible-body">
          <span>{this.renderIngredients(this.props.ingredients)}</span>
          <button className="button is-danger" onClick={this.handleDelete}>
            Delete
          </button>
          <button className="button is-primary" onClick={this.handleEdit}>
            Edit
          </button>
        </div>
      </li>
    )
  }
}

export default Recipe
