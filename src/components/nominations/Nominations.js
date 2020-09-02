import React from "react";
import "../nominations/nominations.scss";

class Nominations extends React.Component {
  render() {
    return (
      <div className="nominations__container">
        <h2 className="nominations__heading"> Nominations </h2>

        <ul>
          <li>
            <span>results 1</span>
            <button className="nominate_btn">Remove</button>
          </li>
          <li>results 2</li>
        </ul>
      </div>
    );
  }
}

export default Nominations;
