import React from "react";
import "./error.scss";

const Error = (props) => {
  return (
    <div className="error-alert">
      <p className="error-message">{props.error}</p>
    </div>
  );
};

export default Error;
