// improt link so to connect different pages
import {Link} from "react-router-dom"

// main div image
import recipeImg from '../assets/recipe.png'
import favoriteImg from '../assets/favorite.png'
import calorieImg from '../assets/calories.png'
import logo from '../assets/logo.png'

// improt toastify 
import { toast } from "react-toastify";

// style file improted
import styles from './home.module.css'


function Home({setShowForm, recipesList, favorites, user}){
    const totalRecipes = recipesList.length;
    const totalFavorites = favorites.length;
    const totalCalories = recipesList.reduce(
      (sum, r) => sum + Number(r.calories || 0),
      0
    );

    return(
        <div className={styles.big}>

            {/* 3 div total of REcipes, favorities and calories */}

            <div className={styles.dashboard}>
                <div className={styles.dashboardItems}>
                    <img src={recipeImg} alt="Recpice" />
                    <div className={styles.dashboardItem}>
                        <p>Total Recipes</p>
                        <h1>{totalRecipes}</h1>
                    </div>
                </div>
                <div className={styles.dashboardItems}>
                    <img src={favoriteImg} alt="favorite" />
                    <div className={styles.dashboardItem}>
                        <p>Total Favorites</p>
                        <h1>{totalFavorites}</h1>
                    </div>
                </div>
                <div className={styles.dashboardItems}>
                    <img src={calorieImg} alt="Calories" />
                    <div className={styles.dashboardItem}>
                        <p>Total calories</p>
                        <h1>{totalCalories}</h1>
                    </div>
                </div>
            </div>

            {/* welcome message with add recipe button */}
        
            <div className={styles.container}>
                <div>
                    <img className={styles.imgLogo} src={logo} alt="recipe.logo" />
                </div>
                <div className={styles.text}>
                    <p>🍴From Your Kitchen to Everyone's Feed🍴</p>
                    <p>Discover new dishes, save what you love, and stay mindful of calories while cooking.</p>
                </div>
                <div className={styles.cards}>
                    <Link to="/recipes" className={styles.noLinkStyle}>
                        <button className={styles.button} onClick={() => {
                                    if (!user) {
                                        toast.warning("Please login to add your recipe!"); 
                                        return;
                                    }
                                    setShowForm(true);
                                    }}>
                                        Add your recipe</button> </Link>
                </div>
            </div>

        </div>
    );
}

export  default Home
