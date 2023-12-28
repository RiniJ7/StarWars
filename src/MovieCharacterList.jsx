import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
      setMovies(response.data.results);
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

  // a function triggered by change in value of selector
  //
  const handleMovieChange = async (movieTitle) => {
    try {
      // Find the selected movie. This will be the input for the function
      const selected = movies.find((movie) => movie.title === movieTitle);

      if (selected) {
        setMovie(selected.title);
        setCharacters(selected.characters);
        console.log(characters);
        console.log("in try-if");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div>
      <h2>Select a Movie:</h2>
      <form className="box">
        <select onChange={(e) => handleMovieChange(e.target.value)}>
          Select Movies
          <option value="Select a Movie">Select a Movie</option>
          <option value="A New Hope">A New Hope </option>
          <option value="The Empire Strikes Back">
            The Empire Strikes Back{" "}
          </option>
        </select>
        <h3>The characters in the movie are :</h3>
        <h3>The tallest characters in the movie are:</h3>
      </form>
    </div>
  );
};

export default MovieCharacterList;

// First you have e which is short for event.
// To understand what it does change onChange={(e) => setName(e.target.value)} to onChange={(e) => console.log(e)}.
// Inspect the log and you'll find a list of events in which one of them is target.
// Open target (if not already opened) and within target, you'll find value.
// In short, this is the target value that's being typed in your input, it's what the user is typing.
