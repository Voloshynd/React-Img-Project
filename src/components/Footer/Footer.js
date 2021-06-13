import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="social-media">
        <a href="https://www.facebook.com/">
          <i
            className="fa fa-facebook-f"
            style={{
              color: "#005662",
              fontSize: "1.6rem",
              marginRight: "10px",
            }}
          ></i>
        </a>
        <a href="https://twitter.com/">
          <i
            className="fa fa-twitter"
            style={{
              color: "#005662",
              fontSize: "1.6rem",
              marginRight: "10px",
            }}
          ></i>
        </a>
        <a href="https://www.instagram.com/">
          <i
            className="fa fa-instagram"
            style={{ color: "#005662", fontSize: "1.6rem" }}
          ></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
