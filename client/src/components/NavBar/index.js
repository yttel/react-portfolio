import React from "react";

function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <a className="navbar-brand" href="/about">
        About
      </a>
      <a className="navbar-brand" href="/contact">
        Contact
      </a>
      <a className="navbar-brand" href="/portfolio">
        Portfolio
      </a>
    </nav>
  );
}

export default NavBar;
