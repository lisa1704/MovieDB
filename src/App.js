import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import {getMoviesByTerm} from "./api/TMDB.js";
import MovieList from "./components/MovieList";

const App =() => {
  const [SearchTerm, setSearchTerm]=useState("");
  const [movies, setMovies]=useState([]);

  const handleSubmit= async(event)=>{
    event.preventDefault();
    await getMoviesByTerm(SearchTerm,setMovies);
  };
  const handleChange=(event)=>{
    console.log(event);
    setSearchTerm(event.target.value);
  };
  return <div>
    <Navbar/>
    <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
    <MovieList movies={movies}/>
    </div>;
};
export default App;
