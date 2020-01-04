import React from 'react';

const Basecamp = () => {
    return (
      <div
        className="modal fade"
        id="basecampModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="basecampModalTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title bold" id="basecampModalTitle">
                BaseCamp
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                className="img-fluid rounded"
                src="basecamp-ss.jpg"
                alt="basecamp-1"
              />
              <table className="table table-striped table-borderless top-margin">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }} colSpan="2">
                      Quick Overview
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="width-15">
                      What is it?
                    </th>
                    <td>
                      A dashboard app for coding bootcamp students to track
                      their progress and organize their thoughts and ideas.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="width-15">
                      Why did I make it?
                    </th>
                    <td>
                      I wanted to make an app to keep track of all of the things
                      related to my bootcamp experience (ideas, timeline,
                      feelings, tips, etc.). I made it because it's something I
                      wish I had during my program and thought it could help
                      other students as well. It's a home <strong>base</strong>{" "}
                      for your boot<strong>camp</strong>!
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="width-15">
                      How did I make it?
                    </th>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td className="text-center width-sm">
                              <i className="fas fa-code"></i>
                            </td>
                            <td>Ruby on Rails backend with a React frontend</td>
                          </tr>
                          <tr>
                            <td className="text-center width-sm">
                              <i className="fas fa-database"></i>
                            </td>
                            <td>PostgreSQL database</td>
                          </tr>
                          <tr>
                            <td className="text-center width-sm">
                              <i className="fas fa-user"></i>
                            </td>
                            <td>JWT user authorization</td>
                          </tr>
                          <tr>
                            <td className="text-center width-sm">
                              <i className="fas fa-border-style"></i>
                            </td>
                            <td>
                              Semantic UI and CSS grid for styling and layout
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="width-15">
                      Details
                    </th>
                    <td>
                      <p>
                        For full details on the project, please see the
                        <a
                          href="https://github.com/jyang81/basecamp-react"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none bold"
                        >
                          {" "}
                          README
                        </a>
                        .
                      </p>
                      <p>
                        For a live demo, go to{" "}
                        <a
                          href="https://base-camp.netlify.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none bold"
                        >
                          base-camp.netlify.com
                        </a>{" "}
                        and log in with <code>demo@demo.com</code>{", "}
                        <span className="bold">password: </span> <code>demo</code> for a sample
                        user experience, or create your own account if you'd
                        like.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Basecamp;



