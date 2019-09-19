import React from 'react'
// import { BrowserRouter as Link } from "react-router-dom";

import Container from "./../Container/Container";

const Footer = () => {
  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-light py-3 border-top border-secondary">
      <Container>
        <p className="float-right">
          <a Link to="#">
            Back to top
          </a>
        </p>
        <p>
          &copy; Meal Select App &middot;{" "}
          <a Link to="#">
            Privacy
          </a>{" "}
          &middot;{" "}
          <a Link to="#">
            Terms
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
