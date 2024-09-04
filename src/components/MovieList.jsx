import React from "react";
import "../css/MovieList.css";
import Movie from "./Movie";

function MovieList({
  movies,
  myList,
  isAllMovieMenu,
  addToList,
  removeFromList,
}) {
  return (
    <div className="movie-list">
      {isAllMovieMenu
        ? movies.map((movie) => (
            <Movie
              key={movie.title}
              movie={movie}
              addToList={addToList}
              removeFromList={removeFromList}
              isAllMovieMenu={isAllMovieMenu}
            />
          ))
        : myList.map((movie) => (
            <Movie
              key={movie.title}
              movie={movie}
              addToList={addToList}
              removeFromList={removeFromList}
              isAllMovieMenu={isAllMovieMenu}
            />
          ))}
    </div>
  );
}

export default MovieList;
