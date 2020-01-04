import React from 'react';

const Home = () => {
    return (
      <main className="light-bg" id="home">
        <img
          src="myAvatar2c.png"
          onMouseOver={ev => (ev.currentTarget.src = "myAvatar2d.png")}
          onMouseOut={ev => (ev.currentTarget.src = "myAvatar2c.png")}
          className="mainimage"
          alt="avatar"
        />
        <br />
        <h1>Joe Yang</h1>
        <hr />
        <div className="main-copy">
          <h4>Software Developer + Graphic Designer</h4>
        </div>
        <h5>
          <i className="fas fa-map-marker-alt"></i> Seattle, WA
        </h5>
        <br />
        <div>
          <a
            href="Joe-Yang-Resume.pdf"
            className="button btn btn-outline-primary"
            target="_blank"
            alt="resume"
          >
            <i className="far fa-file-alt"></i> Download Resume
          </a>
        </div>
      </main>
    );
};

export default Home;