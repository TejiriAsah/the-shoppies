import React from "react";
import "../searchResults/searchResults.scss";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="results">
        <h2> Results from "placeholder" </h2>
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

export default SearchResults;
