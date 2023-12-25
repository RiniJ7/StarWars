import React from 'react'
import "./NavStyles.css"
import "./assets/StarWarsIcon.png"

const NavBar = () => {
  return (
<nav className="nav">
 <img className="site-title" src="./assets/StarWarsIcon.png" alt="star wars logo" />
 
  <ul>
  <li className="active"><a href="/" >People</a></li>
  <li><a href="/" >Films</a></li>
  <li><a href="/" >Planets</a></li>
  <li><a href="/" >Species</a></li>
  <li><a href="/" >Starships</a></li>
  <li><a href="/" >Vehicles</a></li>
  </ul>
</nav>

// {/* <div className='header-box'>
//             <div className='left-buttons'>
//                 <Link to="/"><button className='all-cards-button' >All Cards</button></Link>
//             </div>
            
        
//         </div> */}
  )
}

export default NavBar