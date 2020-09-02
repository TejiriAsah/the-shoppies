import React from "react";
import axios from "axios";
import moviegif from "./assets/movie.gif";
import Movies from "./components/movies/Movies";
import Nominations from "./components/nominations/Nominations";

import "./homePage.scss";

const api_key = "b7123901";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: "",
      movies: [],
      nominatedMovies: [],
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      movie: e.target.value,
    });
  };

  search = () => {
    let movie = this.state.movie;
    this.searchInput(movie);
  };

  remove = (movie) => {
    let nominatedMovies = this.state.nominatedMovies;
    let filteredMovies = nominatedMovies.filter((nominatedMovie) => {
      return movie.imdbID !== nominatedMovie.imdbID;
    });
    this.setState({
      nominatedMovies: filteredMovies,
    });
  };

  nominate = (movie) => {
    let selectedMovies = this.state.nominatedMovies;
    if (selectedMovies.length < 5) {
      selectedMovies.push(movie);
      this.setState({
        nominatedMovies: selectedMovies,
      });
    }
  };

  searchInput = (movie) => {
    axios
      .get(
        "http://www.omdbapi.com/?apikey=" + api_key + "&type=movie&s=" + movie
      )
      .then((response) => {
        console.log("your response", response);
        const searchResponse = response.data.Search;
        if (
          typeof searchResponse !== "undefined" &&
          searchResponse.length > 0
        ) {
          const searchResults = searchResponse.slice(0, 5);
          this.setState({
            movies: searchResults,
          });
        } else if (response.data.Error && response.data.Error.length > 0) {
          this.setState({
            error: response.data.Error,
          });
        }
      })
      .catch((error) => console.log("error", error));
    console.log("here");
  };

  render() {
    const movies = this.state.movies;
    const nominations = this.state.nominatedMovies;

    return (
      <div className="test">
        <h1>The Shoppies</h1>
        {/* <img src={searchIcon} alt="search" className="search__icon" /> */}
        <input
          type="text"
          className="input__field"
          placeholder="search for movies.."
          onChange={this.handleChange}
        />
        <button onClick={this.search} className="nominate_btn">
          search
        </button>
        <div className="testview">
          <div className="results">
            {this.state.error.length > 0 ? (
              <p>{this.state.error}</p>
            ) : (
              movies.map((movie) => {
                return (
                  <Movies
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                    key={movie.imdbID}
                    nominate={() => {
                      this.nominate(movie);
                    }}
                  />
                );
              })
            )}
          </div>
          <div className="nominations__container">
            {/* <h2 className="nominations__heading"> Nominations </h2> */}
            {nominations.map((movie) => {
              return (
                <Nominations
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  key={movie.imdbID}
                  remove={() => {
                    this.remove(movie);
                  }}
                />
              );
            })}
          </div>
        </div>
        <img src={moviegif} alt="movie-gif" className="movie-gif" />
      </div>
    );
  }
}

export default HomePage;
