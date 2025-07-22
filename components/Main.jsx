export default function Main() {
    const ingredients=["Chicken","Oregano","Tomatoes"]
    const x=ingredients.map(ingredient=><li key={ingredient}>{ingredient}</li>)
    function formSubmit(event){
        event.preventDefault()
        const formData= new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
        ingredients.push(newIngredient)
        console.log(ingredients)
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
                <button>Add ingredient</button>
            </form>
            <ul>
                {x}
            </ul>
        </main>
    )
}