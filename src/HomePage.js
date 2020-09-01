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
      error: "",
    };
  }
  searchInput = (movie) => {
    // axios
    //   .get(
    //     "http://www.omdbapi.com/?apikey=" + api_key + "&type=movie&s=" + movie
    //   )
    //   .then((response) => {
    //     console.log("your response", response);
    //     const searchResponse = response.data.Search;
    //     if (
    //       typeof searchResponse !== "undefined" &&
    //       searchResponse.length > 0
    //     ) {
    //       const searchResults = searchResponse.slice(0, 5);
    //       this.setState({
    //         movies: searchResults,
    //       });
    //     } else if (response.data.Error && response.data.Error.length > 0) {
    //       this.setState({
    //         error: response.data.Error,
    //       });
    //     }
    //   })
    //   .catch((error) => console.log("error", error));
    console.log("here");
  };

  render() {
    const movies = this.state.movies;
    return (
      <div className="test">
        <h1>The Shoppies</h1>
        <SearchBar search={this.searchInput} />
        <div className="testview">
          <div className="results">
            {this.state.error.length > 0 ? (
              <p>{this.state.error}</p>
            ) : (
              movies.map((movie) => {
                return <Movies title={movie.title} year={movie.year} />;
              })
            )}
          </div>

          <Nominations />
        </div>
      </div>
    );
  }
}

export default HomePage;
