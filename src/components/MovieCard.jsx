function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.image} alt={props.title} />

      <div className="movie-content">
        <h2>{props.title}</h2>

        <p>Year: {props.year}</p>

        <button>Watch Now</button>
      </div>
    </div>
  );
}

export default MovieCard;