import React from "react";

const Nominations = (props) => {
  return (
    <>
      <div className="movie__box">
        <img src={props.poster} alt="movie-poster" className="movie__poster" />
        <div className="movie__info">
          <span className="nomination-item">
            {props.title + " (" + props.year + ")"}
          </span>
          <button className="nominate_btn" onClick={props.remove}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Nominations;
