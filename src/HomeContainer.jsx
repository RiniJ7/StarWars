import React from "react";
import "./App.css";

const HomeContainer = (props) => {
  // destructuring people property from the props object
  const peopleDetails = props.people;

  //render the component
  return (
    <>
      <div>
        {peopleDetails.length > 0 ? (
          peopleDetails.map((p) => (
            <div className="box" key={p.url}>
              <h2>Name: {p.name}</h2>
              <h2>Weight of Super Hero (Kg): {p.mass}</h2>
              <h2>Skin Color: {p.skin_color}</h2>
            </div>
          ))
        ) : (
          <p> Loading People...</p>
        )}
      </div>
    </>
  );
};

export default HomeContainer;
