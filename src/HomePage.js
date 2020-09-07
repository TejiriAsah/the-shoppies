import React from "react";
import axios from "axios";
import moviegif from "./assets/movie.gif";
import Movies from "./components/movies/Movies";
import Nominations from "./components/nominations/Nominations";
import Error from "./components/error/Error";

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
      error: "",
    });

    const nomination = document.getElementById(movie.imdbID);
    if (nomination) {
      nomination.disabled = false;
    }
  };

  nominate = (movie) => {
    let selectedMovies = this.state.nominatedMovies;

    if (selectedMovies.length < 5) {
      selectedMovies.push(movie);
      this.setState({
        nominatedMovies: selectedMovies,
        error: "",
      });
      document.getElementById(movie.imdbID).disabled = true;
    }
    this.displayBanner();
  };

  displayBanner = () => {
    if (this.state.nominatedMovies.length === 5) {
      this.setState({
        error: "YOU HAVE 5 NOMINATIONS!",
      });
    } else {
      this.setState({
        error: "",
      });
    }
  };

  searchInput = (movie) => {
    axios
      .get(
        "https://www.omdbapi.com/?apikey=" + api_key + "&type=movie&s=" + movie
      )
      .then((response) => {
        const searchResponse = response.data.Search;
        if (
          typeof searchResponse !== "undefined" &&
          searchResponse.length > 0
        ) {
          const searchResults = searchResponse.slice(0, 5);
          this.setState({
            movies: searchResults,
            error: "",
          });
        } else if (response.data.Error && response.data.Error.length > 0) {
          this.setState({
            error: response.data.Error,
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    const movies = this.state.movies;
    const nominations = this.state.nominatedMovies;

    return (
      <div className="homePage">
        <h1 className="homePage__heading">The Shoppies</h1>
        <input
          type="text"
          className="input__field"
          placeholder="search for movies.."
          onChange={this.handleChange}
        />
        <button onClick={this.search} className="share_btn">
          search
        </button>
        {this.state.error.length > 0 && <Error error={this.state.error} />}

        {(this.state.movies.length > 0 ||
          this.state.nominatedMovies.length > 0) && (
          <div className="table-view">
            <div className="results">
              <h2 className="nominations__heading">Search Results</h2>
              {movies.map((movie) => {
                return (
                  <Movies
                    imdbID={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                    key={movie.imdbID}
                    nominate={() => {
                      this.nominate(movie);
                    }}
                  />
                );
              })}
            </div>
            <div className="nominations__container">
              <div className="nominations__share">
                <h2 className="nominations__heading"> Nominations </h2>
                <a
                  className="nominations__shareLink"
                  href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fzen-keller-810803.netlify.app%2F"
                  target="_blank"
                >
                  Share on Facebook ?
                </a>
              </div>
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
        )}
        <img src={moviegif} alt="movie-gif" className="movie-gif" />
      </div>
    );
  }
}

export default HomePage;
