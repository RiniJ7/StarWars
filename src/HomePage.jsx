import React from 'react'
import NavBar from './NavBar'
import Container from './Container'

//the below command returns a promise
fetch("https://swapi.dev/api/people/?page=9")

.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

const HomePage = () => {
  



  return (
    <>
    <NavBar/>
    
    <Container/>
    </>
   
  )
}

export default HomePage