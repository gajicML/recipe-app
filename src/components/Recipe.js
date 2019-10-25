import React, { useContext } from 'react';
import IngredientList from './IngredientList';
import { RecipeContext } from './App';

export default function Recipe({ name, cookTime, servings, instructions, ingredients, id }) {
    const { handleRecipeDelete } = useContext(RecipeContext);

    return (
        <div className="recipe-card">
            <div>
                <h3 className="recipe-name">{name}</h3>
                <div className="buttons">
                    <button className="edit">Edit</button>
                    <button onClick={() => handleRecipeDelete(id)} className="delete">Delete</button>
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
