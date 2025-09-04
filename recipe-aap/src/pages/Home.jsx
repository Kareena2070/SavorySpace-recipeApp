import logo from '../assets/logo.png'

// improt link so to connect different pages
import {Link} from "react-router-dom"

// main div image
import recipeImg from '../assets/recipe.png'
import favoriteImg from '../assets/favorite.png'
import calorieImg from '../assets/calories.png'


// style file improted
import styles from './home.module.css'


function Home({setShowForm}){


    return(
        <div className={styles.big}>

            {/* 3 div total of REcipes, favorities and calories */}

            <div className={styles.dashboard}>
                <div className={styles.dashboardItems}>
                    <img src={recipeImg} alt="Recpice" />
                    <div className={styles.dashboardItem}>
                        <p>Total Recipes</p>
                        <h1>0</h1>
                    </div>
                </div>
                <div className={styles.dashboardItems}>
                    <img src={favoriteImg} alt="favorite" />
                    <div className={styles.dashboardItem}>
                        <p>Total Favorites</p>
                        <h1>0</h1>
                    </div>
                </div>
                <div className={styles.dashboardItems}>
                    <img src={calorieImg} alt="Calories" />
                    <div className={styles.dashboardItem}>
                        <p>Total calories</p>
                        <h1>0</h1>
                    </div>
                </div>
            </div>

            {/* welcome message with add recipe button */}
        
            <div className={styles.container}>
                <div>
                    <img className={styles.imgLogo} src={logo} alt="recipe.logo" />
                </div>
                <div className={styles.text}>
                    <p>🍳 Discover simple and tasty recipes 🍳</p>
                    <p>From quick weeknight dinners to weekend treats, find the perfect recipe for every occasion!</p>
                </div>
                <div className={styles.cards}>
                    <Link to="/recipes" className={styles.noLinkStyle}>
                        <button className={styles.button} onClick={()=>setShowForm(true) }>Add your recipe</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export  default Home
