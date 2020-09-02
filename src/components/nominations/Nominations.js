import React from "react";
import "../nominations/nominations.scss";

const Nominations = (props) => {
  return (
    <>
      <div className="movie-box">
        <div className="tester">
          <img src={props.poster} alt="movie-poster" className="movie-poster" />
        </div>
        <div className="movie-info">
          <span className="nomination-item">
            {props.title + " (" + props.year + ")"}
          </span>
          <button className="nominate_btn" onClick={props.nominate}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Nominations;
