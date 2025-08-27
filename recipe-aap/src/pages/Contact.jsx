import styles from './contact.module.css'

function Contact(){
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Get in touch with our recipe team.</p>
            </div>
            <div className={styles.socialLinks}>
                <div className={styles.socialLink}>
                    <div className={styles.linkHeading}>
                        <h2>📧 Email Us</h2>
                        <p>For recipe requests, suggestions, or general inquiries:</p>
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <span style={{color: "blue", fontSize: "1.3rem"}}>recipe@app.com</span>
                    </div>
                    <div style={{color: "gray"}}>
                        <p>We typically respond within 24 hours!</p>
                    </div>
                </div>

                <div className={styles.socialLink}>
                    <div className={styles.linkHeading}>
                        <h2>📱 Follow Us</h2>
                        <p>Stay updated with our latest recipes:</p>
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <span style={{color: "skyblue", fontSize: "1.3rem"}}>🐦 @RecipeApp</span>
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <span style={{color: "red" ,fontSize: "1.3rem"}}>📷 @RecipeAppOfficial</span>
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <span style={{color: "blue", fontSize: "1.3rem"}}>📘 Recipe App Community</span>
                    </div>
                </div>
            </div>

            <div className={styles.suggest}>
                <h2>💡 Recipe Suggestions</h2>
                <p>Have a favorite recipe you'd like to see featured? We're always looking for new ideas!</p>
                <ul>
                    <li>Send us your family recipes</li>
                    <li>Suggest cuisines you'd like to explore</li>
                    <li>Request dietary-specific options (vegetarian, gluten-free, etc.)</li>
                    <li>Share your cooking tips and tricks</li>
                </ul>
            </div>

            <div className={styles.community}>
                <h2>🍳 Join Our Community</h2>
                <p>Connect with fellow food enthusiasts and share your cooking adventures!</p>
                <div className={styles.com}>
                    <div >
                    👥 <br />
                    Join our cooking community
                    </div>
                    <div >
                    📸 <br />
                    Share your recipe photos
                    </div>
                    <div >
                    ⭐ <br />
                    Rate and review recipes
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Contact