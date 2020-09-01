import React from "react";
import "../nominations/nominations.scss";

class Nominations extends React.Component {
  render() {
    return (
      <div className="nominations__container">
        <h2> Nominations </h2>
        <ul>
          <li>results 1</li>
          <li>results 2</li>
          <li>results 3</li>
          <li>results 4</li>
          <li>results 5</li>
          <li>results 6</li>
        </ul>
      </div>
    );
  }
}

export default Nominations;
