import React from 'react';
import "../css/contact.css";


const COL = "col-auto center-icons"

const Contact = () => {
    return (
      <main className="dark-bg" id="contact">
        <h2 className="bold">GET IN TOUCH</h2>
        <hr />
        <h6 className="main-copy">
          Email me or find me on the web:
        </h6>
        <div className="section">
          <div className="row justify-content-center">
            <div className={COL}>
              <a
                href="mailto:joe.yang.dev@gmail.com?subject=Nice Portfolio!"
                target="_blank"
                rel="noopener noreferrer"
                alt="email"
                title="Email me"
                className="contact-link"
              >
                <i className="far fa-envelope fa-4x"></i>
              </a>
            </div>
            <div className={COL}>
              <a
                href="https://github.com/jyang81"
                target="_blank"
                rel="noopener noreferrer"
                alt="github"
                title="See my GitHub profile"
                className="contact-link"
              >
                <i className="fab fa-github fa-4x"></i>
              </a>
            </div>
            <div className={COL}>
              <a
                href="https://www.linkedin.com/in/joe-yang/"
                target="_blank"
                rel="noopener noreferrer"
                alt="linkedin"
                title="Connect with me on LinkedIn"
                className="contact-link"
              >
                <i className="fab fa-linkedin fa-4x"></i>
              </a>
            </div>
            <div className={COL}>
              <a
                href="https://twitter.com/joeyangdev"
                target="_blank"
                rel="noopener noreferrer"
                alt="twitter"
                title="See my one Tweet"
                className="contact-link"
              >
                <i className="fab fa-twitter fa-4x"></i>
              </a>
            </div>
            <div className={COL}>
              <a
                href="https://medium.com/@jyang81"
                target="_blank"
                rel="noopener noreferrer"
                alt="medium"
                title="Read my blog posts"
                className="contact-link"
              >
                <i className="fab fa-medium fa-4x"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    );
};

export default Contact;