import React from "react";
import { useState } from "react";
import "../css/Movie.css";

function Movie({ movie, isAllMovieMenu, addToList, removeFromList }) {
  const { title, director, description, img, isAdded } = movie;

  const [isAddedInput, setIsAddedInput] = useState(isAdded);

  const addToListMovie = () => {
    const newMovie = { title, director, description, img, isAdded: true };
    addToList(newMovie);
    setIsAddedInput(true);
  };

  const removeFromListMovie = () => {
    const oldMovie = { title, director, description, img, isAdded: false };
    removeFromList(oldMovie);
    setIsAddedInput(false);
  };

  return (
    <div className="movie">
      <img className="movie-image" src={img} alt={title} />
      <h3 className="movie-title">{title}</h3>
      <p className="movie-director">{director}</p>
      <p className="movie-description">{description}</p>
      {!isAllMovieMenu ? (
        <button className="movie-remove-button" onClick={removeFromListMovie}>
          Remove From List
        </button>
      ) : (
        <button className="movie-add-button" onClick={addToListMovie}>
          {isAddedInput ? "Added" : "Add To List"}
        </button>
      )}
    </div>
  );
}

export default Movie;
