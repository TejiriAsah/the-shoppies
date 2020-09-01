import React from "react";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import Nominations from "./components/nominations/Nominations";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchResults />
        <Nominations />
      </div>
    );
  }
}

export default HomePage;
