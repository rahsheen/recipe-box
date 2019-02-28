import React, { useState } from "react"
import classNames from "classnames"

const AddRecipe = ({ onAdd, isActive, onCancel }) => {
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState("")
  const modalClassNames = classNames({
    modal: true,
    "is-active": isActive
  })

  console.log(`Modal classes are ${modalClassNames}`)

  return (
    <div className={modalClassNames}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <h4>Add Recipe</h4>
        </header>
        <section className="modal-card-body">
          <div className="input-field">
            <label htmlFor="recipeName">Recipe Name</label>
            <input
              type="text"
              id="newRecipeName"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="input-field">
            <label htmlFor="ingredients">Ingredients (comma-separated)</label>
            <input
              onChange={e => setIngredients(e.target.value.split(","))}
              id="newRecipeIngredients"
              type="text"
              value={ingredients}
            />
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-danger" onClick={onCancel}>
            Cancel
          </button>
          <button onClick={e => onAdd(name, ingredients)} className="button">
            Add
          </button>
        </footer>
      </div>
    </div>
  )
}

export default AddRecipe
