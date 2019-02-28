import React from "react"
import Recipe from "./recipe"

const RecipeList = ({ recipes, handleDelete, handleEdit }) => {
  return (
    <ul className="collapsible popout" data-collapsible="accordion">
      {recipes.map((recipe, i) => (
        <Recipe
          key={i}
          id={i}
          name={recipe.name}
          ingredients={recipe.ingredients}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  )
}

export default RecipeList
