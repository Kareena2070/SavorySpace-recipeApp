import styles from './recipe.module.css'

import { useState } from 'react'


function Recipes(){

    const [fromData, setFromData] = useState({
        title: "",
        ingredients: "",
        calories: "",
        instruction: "",
        image: ""
    });

    const handleChange = (e)=>{
        setFromData({...fromData, [e.target.name]: e.target.value})
    }

    const [recipesList, setRecipesList] = useState([]);

    const handleSumbit = (e)=>{
        e.preventDefault();
        setRecipesList([...recipesList, fromData])
        setFromData({title: "", ingredients: "", calories: "", instruction: "", image: ""})
    }

   
    return(
        <div className={styles.big}>
            <div className={styles.container}>
                <h1>Our Recipes</h1>

                <form onSubmit={handleSumbit}>
                    <label htmlFor="title">Recipe title</label>
                    <input type="text" name = "title"
                    value={fromData.title}
                    onChange={handleChange}
                    required/>

                    <label htmlFor="calories">Calories</label>
                    <input type="number" name='calories'
                    value={fromData.calories}
                    onChange={handleChange}
                    required />

                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea placeholder='Enter each ingredient on new line...'
                    name='ingredients'
                    value={fromData.ingredients} 
                    onChange={handleChange}
                    required></textarea>

                    <label htmlFor="instruction">Instruction</label>
                    <textarea placeholder='Step-by-step cooking instructions'
                    name='instruction'
                    value={fromData.instruction}
                    onChange={handleChange}
                    ></textarea>

                    <label htmlFor="image">Image URL(Optional)</label>
                    <input type="text"
                    name='image'
                    value={fromData.image}
                    onChange={handleChange}
                    />

                    <button>Add Recipe</button>
                </form>



                <div className={styles.lists}>
                    {recipesList.map((recipe, id)=>{
                        return <div className={styles.list} key={id}>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <p>{recipe.calories} calories</p>
                                    <p>{recipe.ingredients}</p>
                                </div>
                             })}
                </div>
            </div>
        </div>
    );
}

export default Recipes