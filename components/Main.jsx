import React from "react"

export default function Main() {

    
    
    
    const [ingredients,setIngredients] = React.useState([])
    const x=ingredients.map(ingredient=><li key={ingredient}>{ingredient}</li>)
    function formSubmit(event){
        event.preventDefault()
        const formData= new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevItem=>[...prevItem,newIngredient])
       
    }

    return (
        
        <main>
            <form className="add-ingredient-form" onSubmit={formSubmit}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add Button</button>
            </form>
            <ul>
                {x}
            </ul>
        </main>
    )
}