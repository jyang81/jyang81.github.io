import React from 'react';

const Footer = () => {
    return (
      <footer>
        JOE YANG &nbsp; © 2019
        <p className="top-margin">
          <small className="text-muted">
            Seattle skyline photo by {" "}
            <a
              href="https://unsplash.com/@davidsthephotographer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reset text-decoration-none"
            >
               Davids Kokainis
            </a>
          </small>
        </p>
      </footer>
    );
};

export default Footer;

// Photo credit Davids Kokainis
// https://unsplash.com/@davidsthephotographer