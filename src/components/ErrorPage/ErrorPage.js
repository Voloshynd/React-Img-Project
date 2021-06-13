import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <main>
      <div className="error">
        <h1>Oh no! It's 404!</h1>
        <p>The page you are looking for not avaible!</p>
        <Link to="/regular">
          <button>To home Page</button>
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
