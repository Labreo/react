import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown,setRecipeShown] = React.useState(false)
    const ingredientsListItems = ingredients.map(ingredient => (
        <IngredientsList ingredient={ingredient}/>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    function showrecipe(){
       setRecipeShown(prev=>!prev)
    }


    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length>0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
               {ingredientsListItems.length>3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={showrecipe}>Get a recipe</button>
                </div>}
            </section>}
            {recipeShown!=false && <ClaudeRecipe />}
        </main>
    )
}