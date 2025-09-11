// improt router 
import { Route, Routes, Link } from 'react-router-dom'

// import all the file
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Login from './pages/Login'

import "./pages/favorite.css"

import { useState } from 'react'


function App() {

  const [recipesList, setRecipesList] = useState([]);
  const [showForm, setShowForm] = useState(false)
  const [isopen, setIsOpen] = useState(false)
  const [favorites, setFavorites] = useState([]);   // ✅ favorites state
  

  return (
    <>
    <div>
      <nav className="top-navbar">
        <h1 className="logo">Recipe App</h1>

        <ul className={`top-nav-links ${isopen ? "show" : ""}`}>
          <li><Link to={"/signup"} onClick={() => setIsOpen(false)}>Sign Up</Link></li>
          <li><Link to={"/login"} onClick={() => setIsOpen(false)}>Login</Link></li>
        </ul>

        <button className="top-hamburger" onClick={() => setIsOpen(!isopen)}>
          ⋮
        </button>
      </nav>

    
      <nav className='navbar'>
        
        <button className='hamburger'
        onClick={()=> setIsOpen(!isopen)}>
        ☰
        </button>
        
        <ul className={`nav-links ${isopen? "show": ""}`}>
          <li><Link to={"/"} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to={"/recipes"} onClick={() => setIsOpen(false)}  >Recipes</Link></li>
          <li><Link to={"/about"} onClick={() => setIsOpen(false)} >About</Link></li>
          <li><Link to={"/contact"} onClick={() => setIsOpen(false)}  >Contact</Link></li>
        </ul>

      </nav>

      </div>




      <Routes>
        <Route path='/' element={<Home
        setShowForm={setShowForm}
        recipesList={recipesList}
            favorites={favorites}
        />}/>
        <Route path='/recipes' element={<Recipes
        recipesList ={recipesList}
        setRecipesList={setRecipesList}
        showForm={showForm}
        setShowForm={setShowForm}
        favorites={favorites}
        setFavorites={setFavorites}
        />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  )
}

export default App
