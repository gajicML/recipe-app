import React from 'react';
import IngredientList from './IngredientList';

export default function Recipe({ name, cookTime, servings, instructions, ingredients }) {
    return (
        <div className="recipe-card">
            <div>
                <h3 className="recipe-name">{name}</h3>
                <div className="buttons">
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </div>
            </div>

            <div className="clear"></div>

            <div className="steps">
                <span className="steps-heading">Cook Time: </span>
                <span> {cookTime} </span>
            </div>

            <div className="steps">
                <span className="steps-heading">Servings: </span>
                <span> {servings} </span>
            </div>

            <div className="steps">
                <span className="steps-heading">Instructions:</span>
                <div className="recipe-instro">
                {instructions}
                </div>
            </div>

            <div className="steps">
                <span  className="steps-heading">Ingredients:</span>
                <div>
                    <IngredientList ingredients={ingredients}/>
                </div>
            </div>

        </div>
    )
}
