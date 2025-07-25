import React from "react"

export default function Main() {

    
    
    
    const [ingredients,setIngredients] = React.useState([])
    const x=ingredients.map(ingredient=><li key={ingredient}>{ingredient}</li>)
    function formSubmit(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevItem=>[...prevItem,newIngredient])
       
    }

    return (
        
        <main>
            <form className="add-ingredient-form" action={formSubmit}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {x}
            </ul>
        </main>
    )
}