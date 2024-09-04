import React from "react";
import "../css/Header.css";
import { IoSearch } from "react-icons/io5";

function Header({ isAllMovieMenu, movies, setFilterMovies, myList }) {
  const searchMovies = (e) => {
    const searchValue = e.target.value;
    if (!searchValue) {
      setFilterMovies([]);
      return;
    } else {
      if (isAllMovieMenu) {
        const filteredMovies = movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilterMovies(filteredMovies);
      } else {
        const filteredMovies = myList.filter((movie) =>
          movie.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilterMovies(filteredMovies);
      }
    }
  };

  return (
    <div className="header">
      <h1>Movie App</h1>
      <div className="search-container">
        <IoSearch className="search-icon" />
        <input className="search-input" type="text" onChange={searchMovies} />
      </div>
    </div>
  );
}

export default Header;
