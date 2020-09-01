import React from "react";
import "../searchBar/searchBar.scss";
import searchIcon from "../../assets/search-24px.svg";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: "the great gatsby",
    };
  }

  handleChange = (e) => {
    this.setState({
      movie: e.target.value,
    });
  };

  search = () => {
    let movie = this.state.movie;
    this.props.search(movie);
  };

  render() {
    return (
      <div className="input">
        <label className="input__label"> Movie Title</label>
        <input type="text" className="input__field" />
        {/* <img src={searchIcon} alt="search" /> */}
        <button onClick={this.search()}>search</button>
      </div>
    );
  }
}

export default SearchBar;
