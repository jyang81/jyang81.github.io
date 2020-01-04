import React from "react";

const Demojify = () => {
  return (
    <div
      className="modal fade"
      id="demojifyModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="demojifyModalTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title bold" id="demojifyModalTitle">
              Demojify
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
              src="demojify-ss.png"
              alt="demojify-1"
            />
            <br />
            <br />
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
                    A puzzle app where users can create emoji clues of popular
                    movies, songs, people, etc. and other users can try to guess
                    the answers. If they thought it was good, they can give it a like!
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="width-15">
                    Why did I make it?
                  </th>
                  <td>
                    My co-workers and I used to send each other little emoji
                    puzzles over gchat when the workload was light, and it
                    became a fun way to pass the time. I love a good brain
                    teaser, so I decided to turn our idea into an app so other
                    people could play and share their favorite puzzles.
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
                          <td>Ruby on Rails backend</td>
                        </tr>
                        <tr>
                          <td className="text-center width-sm">
                            <i className="fab fa-js-square"></i>
                          </td>
                          <td>Vanilla JavaScript frontend</td>
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
                          <td>User login</td>
                        </tr>
                        <tr>
                          <td className="text-center width-sm">
                            <i className="fas fa-th-large"></i>
                          </td>
                          <td>Full CRUD</td>
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
                        href="https://github.com/jyang81/demojify"
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
                        href=" https://demojify.herokuapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none bold"
                      >
                        demojify.herokuapp.com
                      </a>{" "}
                      and see how many puzzles you can guess correctly, or
                      create your own if you have a good one!
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

export default Demojify;
