import React from "react";
import "../css/Menu.css";

function Menu({ showMovies, showMyList, clearSearchInput }) {
  const showMoviesMenu = () => {
    showMovies();

    clearSearchInput();
    const searchInput = document.querySelector(".search-input");
    searchInput.value = "";
  };

  const showMyListMenu = () => {
    showMyList();

    clearSearchInput();
    const searchInput = document.querySelector(".search-input");
    searchInput.value = "";
  };

  return (
    <div className="movies-buttons">
      <button className="movies-button" onClick={showMoviesMenu}>
        Movies
      </button>
      <button className="movies-button" onClick={showMyListMenu}>
        My List
      </button>
    </div>
  );
}

export default Menu;
