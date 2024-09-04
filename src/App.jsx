import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MovieList from "./components/MovieList";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [movieDatas, setMovieDatas] = useState([]);
  const [movies, setMovies] = useState([
    {
      title: "",
      director: "",
      description: "",
      img: "",
      isAdded: false,
    },
  ]);
  const [myList, setMyList] = useState([]);
  const [isAllMovieMenu, setIsAllMovieMenu] = useState(true);
  const [filterMovies, setFilteredMovies] = useState([]);

  const getMovies = async () => {
    try {
      const requests = movieIds.map((id) =>
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      );
      const responses = await Promise.all(requests);

      const movies = responses.map((response) => response.data);

      setMovieDatas(movies);
    } catch (error) {
      console.error("Film verileri api'dan çekilirken bir hata oluştu:", error);
    }
  };

  const transformMovieData = () => {
    const formattedMovies = movieDatas.map((movie) => ({
      title: movie.Title,
      director: movie.Director,
      description: movie.Plot,
      img: movie.Poster,
      isAdded: false,
    }));
    setMovies(formattedMovies);
    setIsAllMovieMenu(true);
  };

  const showMyList = () => {
    setIsAllMovieMenu(false);
  };

  const addToList = (movie) => {
    if (myList.some((item) => item.title === movie.title)) {
      return;
    }
    setMyList([...myList, movie]);
    if (!isAllMovieMenu) {
      setFilteredMovies([...myList, movie]);
    }
  };

  const removeFromList = (movie) => {
    const filteredList = myList.filter((item) => item.title !== movie.title);
    setMyList(filteredList);

    if (!isAllMovieMenu) {
      setFilteredMovies(filteredList);
    }
  };

  const setFilterMovies = (newMovies) => {
    setFilteredMovies(newMovies);
  };

  const clearSearchInput = () => {
    setFilteredMovies([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getMovies();
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (movieDatas.length > 0) {
      transformMovieData();
    }
  }, [movieDatas]);

  return (
    <>
      <Header
        isAllMovieMenu={isAllMovieMenu}
        movies={movies}
        myList={myList}
        setFilterMovies={setFilterMovies}
      />
      <Menu
        showMovies={transformMovieData}
        showMyList={showMyList}
        clearSearchInput={clearSearchInput}
      />
      <MovieList
        movies={filterMovies.length > 0 ? filterMovies : movies}
        myList={filterMovies.length > 0 ? filterMovies : myList}
        isAllMovieMenu={isAllMovieMenu}
        addToList={addToList}
        removeFromList={removeFromList}
      />
    </>
  );
}

export default App;

const movieIds = [
  "tt0111161", // The Shawshank Redemption
  "tt0068646", // The Godfather
  "tt0071562", // The Godfather: Part II
  "tt0468569", // The Dark Knight
  "tt0050083", // 12 Angry Men
  "tt0108052", // Schindler's List
  "tt0167260", // The Lord of the Rings: The Return of the King
  "tt0167261", // The Lord of the Rings: The Two Towers
  "tt0137523", // Fight Club
  "tt1375666", // Inception
  "tt0110912", // Pulp Fiction
  "tt0120737", // The Lord of the Rings: The Fellowship of the Ring
  "tt0073486", // One Flew Over the Cuckoo's Nest
  "tt0080684", // Star Wars: Episode IV - A New Hope
  "tt0109830", // The Silence of the Lambs
  "tt0102926", // The Usual Suspects
  "tt0076759", // Star Wars: Episode V - The Empire Strikes Back
  "tt0088763", // Raiders of the Lost Ark
  "tt0047478", // 12 Angry Men
  "tt0038650", // Casablanca
  "tt0114369", // The Lion King
  "tt0078748", // Alien
  "tt0054215", // Rear Window
  "tt0087843", // The Shining
  "tt0133093", // The Matrix
  "tt0099685", // Goodfellas
  "tt0078788", // Taxi Driver
  "tt0062622", // Lawrence of Arabia
  "tt0060196", // The Good, the Bad and the Ugly
  "tt0021749", // It Happened One Night
  "tt0034583", // The Maltese Falcon
  "tt0031381", // Modern Times
  "tt0073195", // The French Connection
  "tt0077362", // A Clockwork Orange
  "tt0105236", // Braveheart
  "tt0081505", // Terminator 2: Judgment Day
];
