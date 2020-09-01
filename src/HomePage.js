import React from "react";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import Nominations from "./components/nominations/Nominations";
import "./homePage.scss";

class HomePage extends React.Component {
  render() {
    return (
      <div className="test">
        <h1>The Shoppies</h1>
        <SearchBar />
        <div className="testview">
          <SearchResults />
          <Nominations />
        </div>
      </div>
    );
  }
}

export default HomePage;
