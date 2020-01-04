import React from "react";

const GreenUp = () => {
  return (
    <div
      className="modal fade"
      id="greenupModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="greenupModalTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title bold" id="greenupModalTitle">
              Green Up! Seattle
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
              src="greenup-ss.jpg"
              alt="greenupseattle-1"
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
                    A waste sorting app for Seattle residents to improve their
                    knowledge of proper trash disposal, incentivized by team
                    competition and a utility bill discount.
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="width-15">
                    Why did I make it?
                  </th>
                  <td>
                    I'm a bit of an environmentalist, and one of my pet peeves
                    is when someone throws away their trash in the wrong bin. A
                    lot of the time, it's because they just weren't exposed to
                    the proper information. I wanted to make it fun (and
                    rewarding) to ingrain proper waste disposal habits in people
                    living and working in the city of Seattle.
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
                          <td>Ruby on Rails with MVC</td>
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
                          <td>
                            Secure passwords and user validation with Bcrypt and
                            session IDs
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center width-sm">
                            <i className="fas fa-palette"></i>
                          </td>
                          <td>Bootstrap CSS for styling</td>
                        </tr>
                        <tr>
                          <td className="text-center width-sm">
                            <i className="fas fa-trash"></i>
                          </td>
                          <td>
                            City of Seattle waste guidelines for recycling,
                            compost, and garbage data and images
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
                        href="https://github.com/jyang81/greenupseattle"
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
                        href="https://greenupseattle.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none bold"
                      >
                        greenupseattle.herokuapp.com
                      </a>{" "}
                      and play 'Bin It to Win It!' to test your trash tossing skills!
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

export default GreenUp;
