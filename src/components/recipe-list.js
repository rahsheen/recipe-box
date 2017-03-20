import React, { Component } from 'react';
import Recipe from './recipe';

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: ""
        }

    }

    render() {
        const recipeList = this.props.recipes.map((recipe, i) =>
            <Recipe
                key={i} id={i}
                name={recipe.name}
                ingredients={recipe.ingredients}
                handleDelete={this.props.handleDelete}
            />
        );

        return (
            <ul className="collapsible popout" data-collapsible="accordion">{recipeList}</ul>
        );
    }
}

export default RecipeList;
