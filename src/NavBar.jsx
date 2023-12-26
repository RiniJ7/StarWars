import React from 'react'
import "./NavStyles.css"
import starWarsIcon from "./assets/StarWarsIcon.png"


const NavBar = () => {
  return (
<nav className="nav">
 <img className="site-title" src={starWarsIcon} alt="star wars logo" />
 
  <ul>
  <li className="active"><a href="/" >People</a></li>
  <li><a href="/films" >Films</a></li>
  <li><a href="/all-people" >All People</a></li>
  <li><a href="/species" >Species</a></li>
  <li><a href="/starships" >Starships</a></li>
  <li><a href="/vehicles" >Vehicles</a></li>
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