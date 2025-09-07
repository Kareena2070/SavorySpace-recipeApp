// style file imported
import styles from './recipe.module.css'
// default image for recipe
import defaultImg from '../assets/defaultImg.png'
import { useState } from 'react'


function Recipes({recipesList, setRecipesList, setShowForm, showForm,  favorites,setFavorites }){

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

    const [expended, setExpended] = useState(null)

    const handleDelete = (id)=> {
        setRecipesList((prev)=> prev.filter((_, i)=> i !==id))
    }



    

   
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
                            <button type='button' onClick={()=> setShowForm(false) }>Cancel</button>
                            <button type='submit' >Add Recipe</button>
                        </div>
                        
                    </form>

                ):
                    <button onClick={()=> setShowForm(true)} className={styles.addButton}>Add New Recipe</button>
                } 



                <div className={styles.lists}>

                    {recipesList.length>0?(
                        expended !== null ? (
                            <div className={styles.list} >
                                <img src={recipesList[expended].image || defaultImg} alt={recipesList[expended].title} />
                                <h1>{recipesList[expended].title}</h1>
                                <p>{recipesList[expended].calories}</p>
                                <p>{recipesList[expended].ingredients}</p>
                                <p>{recipesList[expended].instruction}</p>

                                <div className={styles.Gbutton}>
                                    <button className={styles.btn3}  onClick={()=> setExpended(null)}>Back to All Recipes</button>
                                    <button className={styles.btn2  } onClick={()=> {handleDelete(expended); setExpended(null)}}>Delete</button>
                                </div>
                            </div>
                        ) : (
                            recipesList.map((recipe, id)=>(
                                    <div className={styles.list} key={id}>
                                            <img src={recipe.image || defaultImg} alt={recipe.title} />
                                            <h1>{recipe.title}</h1>
                                            <p>{recipe.calories} calories</p>
                                            <div onClick={() =>
                                                    setFavorites((prev) =>
                                                    prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id])}>
                                                    {favorites.includes(id) ? "★ Unfavorite" : "☆ Favorite"}
                                            </div>
                                            <div className={styles.Gbutton}>
                                                <button className={styles.btn1} onClick={()=> setExpended(id)}>Show Details</button>
                                                <button className={styles.btn2} onClick={()=> handleDelete(id)}>Delete</button>
                                            </div>
                                        </div>
                            ))
                        )
                        ): (
                            <p className={styles.RecipeMess}>No recipes yet. Click "Add Your Recipe" to start.</p>
                        )
                    }


                 
                </div>
            </div>
        </div>
    );
}

export default Recipes