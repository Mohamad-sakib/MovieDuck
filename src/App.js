import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieduxGrid from "./components/MovieduxGrid";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WatchList from "./components/WatchList";
import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchList] = useState([]);

  const toggleWatchList = (movieId) => {
    setWatchList((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => movieId !== id)
        : [...prev, movieId],
    );
  };

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/watchlist">WatchList</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MovieduxGrid
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchList={toggleWatchList}
                />
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <WatchList
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchList={toggleWatchList}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>

      <footer className="footer">this is fotter</footer>
    </div>
  );
}

export default App;

// <Link to="/">home</Link>; // it changes the url in searchBar when user click on it from application
