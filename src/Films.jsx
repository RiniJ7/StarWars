// import React from "react";
// import { useState, useEffect } from "react";
// import FilmsContainer from "./FilmsContainer";

// const Films = () => {
//   const [filmsData, setFilmsData] = useState([]);

//   //use fetch to get information from the API end point

//   async function getFilms() {
//     try {
//       const response = await fetch("https://swapi.dev/api/films/");
//       const filmsData = await response.json();
//       console.log(filmsData.results);
//       setFilmsData(filmsData.results)
//       let title = filmsData.results.map((title) => {
//         console.log(title);
//       });
//       return (filmsData, title);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   useEffect(() => {
//     getFilms();
//   }, []);

//   return (
//   <>
//  <FilmsContainer filmsData ={filmsData}/>
  
//   </>
  
// )};

// export default Films;


import React, { useState, useEffect } from "react";
import FilmsContainer from "./FilmsContainer";

const Films = () => {
  const [filmsData, setFilmsData] = useState([]);

  // use fetch to get information from the API end point
  async function getFilms() {
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      const filmsData = await response.json();
      console.log(filmsData.results);
      setFilmsData(filmsData.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      <FilmsContainer filmsData={filmsData} />
    </>
  );
};

export default Films;
