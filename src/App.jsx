import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=8df86d5c&s=avengers"
    );

    const data = await response.json();

    setMovies(data.Search);
  }

  return (
    <div>
      <h1>Movie Listing App</h1>

      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            image={movie.Poster}
          />
        ))}
      </div>
    </div>
  );
}

export default App;