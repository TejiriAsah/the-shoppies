import React from "react";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      year: "",
      nominated: false,
    };
  }

  componentDidMount() {
    this.setState({
      title: "boyyy bye",
      year: "1942",
      nominated: true,
    });
  }

  render() {
    return (
      <ul>
        <li>
          <span>{this.state.title + " (" + this.state.year + ")"} </span>
          <button>Nominate</button>
        </li>
      </ul>
    );
  }
}
export default Movies;
