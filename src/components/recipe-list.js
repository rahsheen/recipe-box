import React from 'react';

function RecipeList(props) {
    function renderIngredients(ingredients) {
        const ingredientsList = ingredients.map((ingredient, i) => 
        <li key={i} className="collection-item">{ingredient}</li>
        );
        
        return (<ul className="collection">{ingredientsList}</ul>);
    }

    const recipeList = props.recipes.map((recipe) =>
        <li key={recipe.name}>
            <div className="collapsible-header"><h5>{recipe.name}</h5></div>
            <div className="collapsible-body">
                <span>{renderIngredients(recipe.ingredients)}</span>
                <a className="btn">Edit</a>
                <a className="btn red">Delete</a>
            </div>
        </li>
    );

    return (
        <ul className="collapsible popout" data-collapsible="accordion">{recipeList}</ul>
    );
}

export default RecipeList;
