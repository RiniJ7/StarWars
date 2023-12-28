import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const MovieCharacterList = () => {
  //we need an array of all movies
  // a string of movie that need to be compared
  //a array of characters who acted in the movie

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState("");
  const [characters, setCharacters] = useState([]);

  //fetch the movies

  const fetchMovies = async () => {
    console.log("below fetch");
    try {
      const response = await axios.get("https://swapi.dev/api/films/");
      console.log(response.data.results);
      console.log("in try");
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  //make sure the function renders only once
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Select a Movie:</h2>
      <form className="box">
        <select onChange= {(e)=>handleChange(e.target.value)}>Select Movies
        <option value="Select a Movie" >Select a Movie</option>
        <option value="Movie1">Movie1 </option>
        <option value="Movie2">Movie2 </option>
        </select>
        <h3>The characters in the movie is :</h3>
        <h3>The tallest characters in the movie is:</h3>
      </form>

    </div>
  );
};

export default MovieCharacterList;
