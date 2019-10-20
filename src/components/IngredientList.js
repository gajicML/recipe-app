import React from 'react'
import Ingredient from './Ingredient';

export default function IngredientList({ ingredients }) {
    console.log(ingredients);
    const ingredientElements = ingredients.map(ingredient => {
        return <Ingredient key={ingredient.id} ingredient={ingredient} />
    })
    return (
        <div>
            {ingredientElements}
        </div>
    )
}
