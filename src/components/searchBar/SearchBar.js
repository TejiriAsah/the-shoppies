import React from "react";
import "../searchBar/searchBar.scss";
import searchIcon from "../../assets/search-24px.svg";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="input">
        <label className="input__label"> Movie Title</label>
        <input type="text" className="input__field">
          {/* <img src={searchIcon} alt="search" /> */}
        </input>
      </div>
    );
  }
}

export default SearchBar;
