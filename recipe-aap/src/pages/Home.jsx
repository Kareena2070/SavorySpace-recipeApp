import logo from '../assets/logo.png'
import easy from '../assets/H1.png'
import health from '../assets/R3.png'
import step from '../assets/H3.png'



import styles from './home.module.css'


function Home(){


    return(
        <div className={styles.big}>

        
            <div className={styles.container}>
                <div>
                    <img className={styles.imgLogo} src={logo} alt="recipe.logo" />
                </div>
                <div className={styles.text}>
                    <h1>Welcome to Recipe App</h1>
                    <p>🍳 Discover simple and tasty recipes 🍳</p>
                    <p>From quick weeknight dinners to weekend treats, find the perfect recipe for every occasion!</p>
                </div>
                <div className={styles.cards}>
                    <div>
                        <img className={styles.imgHs} src={easy} alt="Quick & Easy" />
                        <h2>Quick & Easy</h2>
                        <p>Ready in 30 minutes or less</p>
                    </div>
                    <div>
                        <img className={styles.imgHs} src={health} alt="Healthy options" />
                        <h2>Healthy Options</h2>
                        <p>Nutritious and delicious</p>
                    </div>
                    <div>
                        <img className={styles.imgHs} src={step} alt="Step by step" />
                        <h2>Step by Step</h2>
                        <p>Easy to follow instructions</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export  default Home
