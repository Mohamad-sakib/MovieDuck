import "../App.css";
import "../styles.css";
import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieduxGrid({ movies, watchlist, toggleWatchList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchRating = (movie, rating) => {
    switch (rating) {
      case "Good":
        return movie.rating >= 8;

      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;

      case "Bad":
        return movie.rating < 5;

      default:
        return true;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchGenre(movie, genre) &&
      matchRating(movie, rating) &&
      matchSearchTerm(movie, searchTerm),
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="search"
        value={searchTerm}
        onChange={handleSearchChange}
      ></input>

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genres</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Drama</option>
            <option>Action</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Ratings</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            isWatchListed={watchlist.includes(movie.id)}
            toggleWatchList={toggleWatchList}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieduxGrid;
