import React from "react";
import axios from "axios";
import SearchBar from "./components/searchBar/SearchBar";
// import SearchResults from "./components/searchResults/SearchResults";
import Movies from "./components/movies/Movies";

import Nominations from "./components/nominations/Nominations";
import "./homePage.scss";

const api_key = "b7123901";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      nominatedMovies: [],
    };
  }
  searchInput = (movie) => {
    axios
      .get(
        "http://www.omdbapi.com/?apikey=" +
          { api_key } +
          "&type=movie&s=" +
          { movie }
      )
      .then((response) => {
        const searchResults = response.slice(0, 5);
        this.setState({
          movies: searchResults,
        });
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="test">
        <h1>The Shoppies</h1>
        <SearchBar />
        <div className="testview">
          <div className="results">
            <Movies />
            <Movies />
            <Movies />
          </div>

          <Nominations />
        </div>
      </div>
    );
  }
}

export default HomePage;
