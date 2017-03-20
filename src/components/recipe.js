import React, { Component } from 'react'

class Recipe extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    renderIngredients(ingredients) {

        const ingredientsList = ingredients.map((ingredient, i) =>
            <li key={ingredient} className="collection-item">{ingredient}</li>
        );

        return (<ul className="collection">{ingredientsList}</ul>);
    }

    handleDelete(e) {
        e.preventDefault();

        this.props.handleDelete(this.props.id);
    }

    handleEdit(e) {
        e.preventDefault();

        this.props.handleEdit(this.props.id);
    }

    render() {
        return (
            <li>
                <div className="collapsible-header"><h5>{this.props.name}</h5></div>
                <div className="collapsible-body">
                    <span>{this.renderIngredients(this.props.ingredients)}</span>
                    <a href="#editModal" className="btn" onClick={this.handleEdit}>Edit</a>
                    <a className="btn red" onClick={this.handleDelete}>Delete</a>
                </div>
            </li>
        );
    }
}

export default Recipe;