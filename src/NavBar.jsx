import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
 

<div class="w3-bar w3-red">
 <div class="w3-bar-item w3-button">Super Hero List</div>
  <a href="#" class="w3-bar-item w3-button">Home-People</a>
  <a href="#" class="w3-bar-item w3-button">Films</a>
  <a href="#" class="w3-bar-item w3-button">Planets</a>
  <a href="#" class="w3-bar-item w3-button">Species</a>
  <a href="#" class="w3-bar-item w3-button">Starships</a>
  <a href="#" class="w3-bar-item w3-button">Vehicles</a>
</div>
{/* <div className='header-box'>
            <div className='left-buttons'>
                <Link to="/"><button className='all-cards-button' >All Cards</button></Link>
            </div>
            
        
        </div> */}
</>
  )
}

export default NavBar