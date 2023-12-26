import React, { useState, useEffect } from "react";
import HomeContainer from "./HomeContainer";


const HomePage = () => {
  //initialize an empty array to accept data from the api
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/");
      if (!response.ok) {
        console.log(`error ${response.status}`);
      }
      const data = await response.json();
      console.log(data.results);
      setPeople(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
//if getPeople() is called without useEffect, the rendering will happen infinite number of times 
//By using useEffect with an empty dependency array, you ensure that the data fetching is only done once after the initial render.
  useEffect(() => {
    getPeople();
  }, []);

  //   //the below fetch command returns a promise
  //   fetch("https://swapi.dev/api/people/")
  //     //if the promise returns a value, it performs the .then methods
  //     //here the data is converted to json (readable format)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     //here the data hence converted is printed in the console
  //     .then((data) => console.log(data))
  //     //console the error if the promise is not kept/promise does not return a value
  //     .then((data)=> data.map)
  //     .catch((error) => console.error("Error:", error));

  return (
    <>
     
      <HomeContainer people={people} />
    </>
  );
};

export default HomePage;
