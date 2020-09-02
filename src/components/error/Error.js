import React from "react";
import "./error.scss";

const Error = (props) => {
  return (
    <div className="error-alert">
      <p>{props.error}</p>
    </div>
  );
};

export default Error;
