// import defaultImg from '../assets/defaultImg.png'

// function Favorities({recipes, favorites, toggleFavorite}){
//     const favRecipes = recipes.filter((_, i) => favorites.includes(i));
//     return(
//         <div className="favorite-container">
//             <h1>Your Favorites</h1>
//             <div className="favorite-grid">
//                 {favRecipes.length > 0 ? (
//                 favRecipes.map((recipe, id) => (
//                 <div key={id} className="favorite-card">
//                     <img src={recipe.image || defaultImg} alt={recipe.title} />
//                     <h2>{recipe.title}</h2>
//                     <p>{recipe.calories} calories</p>
//                     <button onClick={() => toggleFavorite(id)}>Unfavorite</button>
//                 </div>
//                 ))
//                 ) : (
//                     <p>No favorites yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Favorities