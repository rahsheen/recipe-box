import React, { useState } from "react"
import classNames from "classnames"

const EditRecipe = ({ onEdit, isActive, onCancel }) => {
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState("")
  const modalClassNames = classNames({
    modal: true,
    "is-active": isActive
  })

  console.log(`Modal classes are ${modalClassNames}`)

  return (
    <div className={modalClassNames}>
      <div className="modal-content">
        <h4>Edit Recipe</h4>
        <div className="input-field">
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            type="text"
            id="oldRecipeName"
            onChange={setName}
            value={name}
          />
        </div>
        <div className="input-field">
          <label htmlFor="ingredients">Ingredients (comma-separated)</label>
          <input
            onChange={setIngredients}
            id="oldRecipeIngredients"
            type="text"
            value={ingredients}
          />
        </div>
      </div>
      <footer className="modal-card-foot">
        <button className="button is-danger" onClick={onCancel}>
          Cancel
        </button>
        <button onClick={() => onEdit(name, ingredients)} className="button">
          Add
        </button>
      </footer>
    </div>
  )
}

export default EditRecipe
