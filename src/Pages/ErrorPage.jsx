import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>The page you are looking for could not be found or there was an error processing your request.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ErrorPage;
