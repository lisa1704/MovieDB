import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import {getMoviesByTerm} from "./api/TMDB.js";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

const App =() => {
  const [SearchTerm, setSearchTerm]=useState("");
  const [movies, setMovies]=useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const [totalPages, setTotalPages]=useState(0);

  const handleSubmit= async(event)=>{
    event.preventDefault();
    await getMoviesByTerm(SearchTerm,setMovies, currentPage,setTotalPages);
  };
  const handleChange=(event)=>{
    console.log(event);
    setSearchTerm(event.target.value);
  };
  const nextPage= async(page_number)=>{
    setCurrentPage(page_number);
    await getMoviesByTerm(SearchTerm,setMovies,currentPage,setTotalPages);
  }

  return <div>
    <Navbar/>
    <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
    <MovieList movies={movies}/>
    {totalPages>1 ? (
    <Pagination 
    nextPage={nextPage} 
    currentPage={ currentPage} 
    totalPages={totalPages}/>
    ):
    ("")
    }
    </div>;
};
export default App;
