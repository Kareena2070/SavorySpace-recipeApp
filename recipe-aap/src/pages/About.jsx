
import styles from './about.module.css'

function About(){

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>About Recipe App</h1>
                <p>Your ultimate destination for delicious and easy-to-make recipes!</p>
            </div>

            <div className={styles.para}>
                <h3>🍳 Our Mission</h3>
                <p>We believe that cooking should be fun, accessible, and rewarding for everyone. Our carefully curated collection of recipes focuses on simple ingredients and easy-to-follow instructions, making it perfect for both beginners and experienced home cooks.</p>
            </div>

            <div className={styles.list}>
                <h3>🥘 What We Offer</h3>
                <ul>
                    <li><strong>Quick Meals: </strong>Pasta dishes and sandwiches ready in under 30 minutes</li>
                    <li><strong>Comfort Food: </strong>Hearty burgers and warming soups for satisfying meals</li>
                    <li><strong>Healthy Options: </strong>Fresh salads and nutritious ingredients</li>
                    <li><strong>Classic Favorites: </strong>Pizza and other beloved dishes made simple</li>
                </ul>
            </div>
            
            <div className={styles.para}>
                <h3>👨‍🍳 Our Approach</h3>
                <p>Every recipe in our collection has been chosen for its simplicity and flavor. We focus on using common ingredients that you can easily find at your local grocery store, with clear instructions that take the guesswork out of cooking.</p> 
            </div>

            <div className={styles.lastDiv}>
                <p>"Cooking is not about convenience. It's about love, creativity, and bringing people together around the table."</p>
            </div>
        </div>
    );

}
export default About
