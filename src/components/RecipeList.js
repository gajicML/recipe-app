import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipeContext } from './App';

export default function RecipeList({ recipes }) {
    const { handleRecipeAdd } = useContext(RecipeContext);
    return (
        <div className="recipe-list">
            <div>
                {recipes.map(recipe => {
                    return (
                        <Recipe 
                            key={recipe.id}
                            {...recipe}
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


