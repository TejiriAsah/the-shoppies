import React from "react";

const Movies = (props) => {
  return (
    <ul>
      <li>
        <span>{props.title + " (" + props.year + ")"} </span>
        <button>Nominate</button>
      </li>
    </ul>
  );
};
export default Movies;
