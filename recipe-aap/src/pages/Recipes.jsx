// style file imported
import styles from './recipe.module.css'
// default image for recipe
import defaultImg from '../assets/defaultImg.png'

// improt toastify
import { toast } from "react-toastify";


import { useState } from 'react'

function Recipes({ recipesList, setRecipesList, setShowForm, showForm, favorites, setFavorites, user }) {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    calories: "",
    instruction: "",
    image: ""
  });

  const [expended, setExpended] = useState(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    const newRecipe = { ...formData, id: Date.now() }; // unique id
    setRecipesList([...recipesList, newRecipe]);
    setFormData({ title: "", ingredients: "", calories: "", instruction: "", image: "" });
    setShowForm(false);
  }

  const handleDelete = (id) => {
    setRecipesList((prev) => prev.filter((r) => r.id !== id));
    setFavorites((prev) => prev.filter((f) => f !== id));
  }

  // recipes to show depending on toggle
  const recipesToDisplay = showFavoritesOnly
    ? recipesList.filter((r) => favorites.includes(r.id))
    : recipesList;

  return (
    <div className={styles.big}>
      <div className={styles.container}>
        <h1>Our Recipes</h1>

        {showForm ? (
          <form onSubmit={handleSumbit} className={styles.form}>
            <label htmlFor="title">Recipe title</label>
            <input type="text" name="title"
              value={formData.title}
              onChange={handleChange}
              required />

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
              <button type='button' onClick={() => setShowForm(false)}>Cancel</button>
              <button type='submit'>Add Recipe</button>
            </div>
          </form>
        ) : (
          <button onClick={() => {
            if (!user) {
              toast.warning("Please login to add your recipe!"); 
              return;
            }
            setShowForm(true);
          }}
          className={styles.addButton}>
            Add New Recipe
          </button>
        )}

        {favorites.length > 0 && (
          <button
            className={styles.favAllButton}
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          >
            {showFavoritesOnly ? "Show All Recipes" : "Your Favorite Recipes"}
          </button>
        )}

        <div className={styles.lists}>
          {recipesToDisplay.length > 0 ? (
            expended !== null ? (
              <div className={styles.list}>
                {(() => {
                  const recipe = recipesList.find((r) => r.id === expended);
                  if (!recipe) return null;
                  return (
                    <>
                      <img src={recipe.image || defaultImg} alt={recipe.title} />
                      <h1>{recipe.title}</h1>
                      <p>{recipe.calories}</p>
                      <p>{recipe.ingredients}</p>
                      <p>{recipe.instruction}</p>

                      <div className={styles.Gbutton}>
                        <button className={styles.btn3} onClick={() => setExpended(null)}>Back to All Recipes</button>
                        <button className={styles.btn2} onClick={() => { handleDelete(recipe.id); setExpended(null); }}>Delete</button>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              recipesToDisplay.map((recipe) => (
                <div className={styles.list} key={recipe.id}>
                  <img src={recipe.image || defaultImg} alt={recipe.title} />
                  <h1>{recipe.title}</h1>
                  <p>{recipe.calories} calories</p>
                  <div
                    onClick={() =>
                      setFavorites((prev) =>
                        prev.includes(recipe.id)
                          ? prev.filter((f) => f !== recipe.id)
                          : [...prev, recipe.id]
                      )
                    }
                  >
                    {favorites.includes(recipe.id) ? "★ Unfavorite" : "☆ Favorite"}
                  </div>
                  <div className={styles.Gbutton}>
                    <button className={styles.btn1} onClick={() => setExpended(recipe.id)}>Show Details</button>
                    <button className={styles.btn2} onClick={() => handleDelete(recipe.id)}>Delete</button>
                  </div>
                </div>
              ))
            )
          ) : (
            <p className={styles.RecipeMess}>
              {showFavoritesOnly
                ? "No favorite recipes yet."
                : "No recipes yet. Click 'Add Recipe' to start."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
