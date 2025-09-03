// improt router 
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
// import all the file
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import About from './pages/About'
import Contact from './pages/Contact'

import { useState } from 'react'


function App() {

  const [recipesList, setRecipesList] = useState([]);
  // const aadRecipe = (recipe) => setRecipesList((prev)=> [...prev, recipe])
  

  return (
    <>
      <nav className='navbar'>
        
        <ul className='nav-links'>
          <li><Link to={"/"} className="no-link-style" >Home</Link></li>
          <li><Link to={"/recipes"} className="no-link-style" >Recipes</Link></li>
          <li><Link to={"/about"} className="no-link-style" >About</Link></li>
          <li><Link to={"/contact"} className="no-link-style" >Contact</Link></li>
        </ul>
      </nav>




      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes
        recipesList ={recipesList}
        // addRecipe ={addRecipe}
        setRecipesList={setRecipesList}
        />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
