import styles from './recipe.module.css'

import { useState } from 'react'


function Recipes({recipesList, setRecipesList}){

    const [formData, setFormData] = useState({
        title: "",
        ingredients: "",
        calories: "",
        instruction: "",
        image: ""
    });

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSumbit = (e)=>{
        e.preventDefault();
        setRecipesList([...recipesList, formData])
        setFormData({title: "", ingredients: "", calories: "", instruction: "", image: ""})
        setShowForm(false);
    }

    const [showForm, setShowForm] = useState(false)

   
    return(
        <div className={styles.big}>
            <div className={styles.container}>
                <h1>Our Recipes</h1>


                {showForm ? (   
                    <form onSubmit={handleSumbit} className={styles.form}>
                        <label htmlFor="title">Recipe title</label>
                        <input type="text" name = "title"
                        value={formData.title}
                        onChange={handleChange}
                        required/>

                        <label htmlFor="calories">Calories</label>
                        <input type="number" name='calories'
                        value={formData.calories}
                        onChange={handleChange}
                        required />

                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea placeholder='Enter each ingredient on new line...'
                        name='ingredients'
                        value={formData.ingredients} 
                        onChange={handleChange}
                        required></textarea>

                        <label htmlFor="instruction">Instruction</label>
                        <textarea placeholder='Step-by-step cooking instructions'
                        name='instruction'
                        value={formData.instruction}
                        onChange={handleChange}
                        ></textarea>

                        <label htmlFor="image">Image URL(Optional)</label>
                        <input type="text"
                        name='image'
                        value={formData.image}
                        onChange={handleChange}
                        />
                        <div className={styles.groupButton}>
                            <button type='button' onClick={()=> setShowForm(false)}>Cancel</button>
                            <button type='submit' >Add Recipe</button>
                        </div>
                        
                    </form>

                ):
                    <button onClick={()=> setShowForm(true)} className={styles.addButton}>Add New Recipe</button>
                } 



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