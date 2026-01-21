import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieduxGrid from "./components/MovieduxGrid";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WatchList from "./components/WatchList";

function App() {
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
            <Route path="/" element={<MovieduxGrid />}></Route>
            <Route path="/watchlist" element={<WatchList />}></Route>
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
