import "./App.css";
import MovieCard from "./components/MovieCard";
import movies from "./data/movie";

function App() {
  return (
    <div>
      <h1>Movie Listing App</h1>

      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
            rating={movie.rating}
            image={movie.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;