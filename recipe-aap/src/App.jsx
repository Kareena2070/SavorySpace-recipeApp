// improt router 
import { Route, Routes, Link } from 'react-router-dom'

// import all the file
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import About from './pages/About'
import Contact from './pages/Contact'
import LoginSigup from './pages/Login'

// import toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from 'react'
function App() {

  const [recipesList, setRecipesList] = useState([]);
  const [showForm, setShowForm] = useState(false)
  const [isopen, setIsOpen] = useState(false)
  const [favorites, setFavorites] = useState([]);   
  const [user, setUser] = useState(null); 
  

  return (
    <>
    <div>
        <nav className="top-navbar">
          <h1 className="logo">SavorySpace</h1>

          <ul className={`top-nav-links `}>
            {user ? (
              <li>Welcome, {user.name}</li>
            ) : (
              <li><Link to={"/login"} onClick={() => setIsOpen(false)}>Login</Link></li>
            )}
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
            user={user}    
        />}/>
        <Route path='/recipes' element={<Recipes
        recipesList ={recipesList}
        setRecipesList={setRecipesList}
        showForm={showForm}
        setShowForm={setShowForm}
        favorites={favorites}
        setFavorites={setFavorites}
        user={user}    
        />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        
        <Route path='/login' element={<LoginSigup 
        setUser={setUser}
        />}/>

      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        // theme="colored"
      />
    </>
  )
}

export default App
