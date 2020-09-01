import React from "react";
import "../searchBar/searchBar.scss";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="input">
        <label className="input__label"> Movie Title</label>
        <input type="text" className="input__field"></input>
      </div>
    );
  }
}

export default SearchBar;
