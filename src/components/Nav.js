import React from 'react';
import "../css/nav.css";


const Nav = () => {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark navcolor">
        <a className="navbar-brand" href="/">
          <span className="sr-only">(current)</span><img src="joeyangdev-alt.svg" alt="JY logo" className="logo" /> Joe Yang
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link my-nav-link" href="#about">
              About
            </a>
            <a className="nav-item nav-link my-nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-item nav-link my-nav-link" href="#tech">
              Technologies
            </a>
            <a className="nav-item nav-link my-nav-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
}

export default Nav;

