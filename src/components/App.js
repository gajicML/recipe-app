import React from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';

function App() {
  return (
    <div>
      <RecipeList recipes={sampleRecipes} />
    </div>
  
    );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat the chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: "2 kg"
      },
      {
        id: 2,
        name: 'Salt',
        amount: "5 g"
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat the pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: "5 kg"
      },
      {
        id: 2,
        name: 'Salt',
        amount: "10 g"
      }
    ]
  },
]

export default App;
