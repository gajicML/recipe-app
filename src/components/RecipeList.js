import React from 'react';
import Recipe from './Recipe';

export default function RecipeList({ recipes, handleRecipeAdd, handleRecipeDelete }) {
    return (
        <div className="recipe-list">
            <div>
                {recipes.map(recipe => {
                    return (
                        <Recipe 
                            key={recipe.id}
                            {...recipe}
                            handleRecipeDelete={handleRecipeDelete}
                        />
                    )
                })}
            </div>

            <div className="clear"></div>

            <div className="buttons float-none ">
                <button 
                    className="add"
                    onClick={handleRecipeAdd}
                >
                    Add Recipe
                </button>
            </div>
        
        </div>
    )
}


