import "../App.css";
import "../styles.css";
import React from "react";
import MovieCard from "./MovieCard";

export default function WatchList({ movies, watchlist, toggleWatchList }) {
  return (
    <div>
      <h1 className="title">Your WatchList</h1>
      <div>
        <div className="watchlist">
          {watchlist.map((id) => {
            const movie = movies.find((movie) => movie.id === id);
            return (
              <MovieCard
                movie={movie}
                isWatchListed={true}
                toggleWatchList={toggleWatchList}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
