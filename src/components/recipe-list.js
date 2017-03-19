import React, { Component } from 'react';

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: props.recipes
        }
    }



    render() {
        let recipes = this.props.recipes;

        return (
            <ul className="list-group">

            </ul>
        );
    }
};

export default RecipeList;
