import styles from './recipe.module.css'

import R1 from '../assets/R1.png'
import R2 from '../assets/R2.png'
import R3 from '../assets/R3.png'
import R4 from '../assets/R4.png'
import R5 from '../assets/R5.png'


function Recipes(){

    const recipesList= [
        {
            img: R1,
            heading: "Pasta"
        },
        {
            img: R2,
            heading: "Pizza"
        },
        {
            img: R3,
            heading: "Salad"
        },
        {
            img: R4,
            heading: "Burger"
        },
        {
            img: R5,
            heading: "Soup"
        }
    ]

    return(
        <div className={styles.big}>
            <div className={styles.container}>
                <h1>Our Recipes</h1>
                <div className={styles.lists}>
                    {recipesList.map((recipe, id)=>{
                        return <div className={styles.list}>
                                    <img src={recipe.img} alt={recipe.heading} />
                                    <p>{recipe.heading}</p>
                                </div>
                             })}
                </div>
            </div>
        </div>
    );
}

export default Recipes