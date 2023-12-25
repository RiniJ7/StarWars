import React from 'react'
import './App.css'

const HomeContainer = (props) => {
    // destructuring people property from the props object
    const people = props.people;

    //render the component
  return (
    <div>
        {people.map((p) => {console.log(p);
        return(
            //return jsx element for each person
            <div className="box" key={p.url}>
                <h2>Name: {p.name}</h2>
                <h2>Weight of Super Hero (Kg): {p.mass}</h2>
                <h2>Skin Color: {p.skin_color}</h2>

                </div>
        )
        })}
    </div>
  )
}

export default HomeContainer