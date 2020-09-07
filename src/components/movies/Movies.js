import React from "react";
import "./movies.scss";

const Movies = (props) => {
  return (
    <>
      <div className="movie__box">
        <img src={props.poster} alt="movie-poster" className="movie__poster" />
        <div className="movie__info">
          <span className="nomination-item">
            {props.title + " (" + props.year + ")"}
          </span>
          <button
            id={props.imdbID}
            className="nominate_btn"
            onClick={props.nominate}
          >
            Nominate
          </button>
        </div>
      </div>
    </>
  );
};
export default Movies;
