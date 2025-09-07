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
  const [showForm, setShowForm] = useState(false)
  const [isopen, setIsOpen] = useState(false)
  const [favorites, setFavorites] = useState([]);   // ✅ favorites state
  
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };
  

  return (
    <>
      <nav className='navbar'>
        
        <button className='hamburger'
        onClick={()=> setIsOpen(!isopen)}>
        ☰
        </button>
        
        <ul className={`nav-links ${isopen? "show": ""}`}>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/recipes"}  >Recipes</Link></li>
          <li><Link to={"/about"} >About</Link></li>
          <li><Link to={"/contact"}  >Contact</Link></li>
        </ul>

      </nav>




      <Routes>
        <Route path='/' element={<Home
        setShowForm={setShowForm}
        />}/>
        <Route path='/recipes' element={<Recipes
        recipesList ={recipesList}
        setRecipesList={setRecipesList}
        showForm={showForm}
        setShowForm={setShowForm}
        favorites={favorites}
        setFavorites={setFavorites}
        toggleFavoritet={toggleFavorite}
        />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
