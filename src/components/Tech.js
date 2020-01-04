import React from 'react';
import "../css/tech.css";

const COLUMN = "logo-wrapper col-6 col-sm-4 col-md-3 col-lg-2"

const Tech = () => {
    return (
      <main className="light-bg" id="tech">
        <h2 className="bold">TECHNOLOGIES</h2>
        <hr />
        <h6 className="main-copy">
          I'm proficient with the following languages and tools:
        </h6>
        <div className="section">
          <div className="row">
            <div className={COLUMN}>
              <div>
                <img src="logos/javascript.png" alt="Javascript" />
                <br />
                <span>Javascript</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/react.png" alt="React" />
                <br />
                <span>React</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/ruby.png" alt="Ruby" />
                <br />
                <span>Ruby</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/rails.png" alt="Rails" />
                <br />
                <span>Rails</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/html.png" alt="HTML5" />
                <br />
                <span>HTML5</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/css.png" alt="CSS3" />
                <br />
                <span>CSS3</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/postgres.png" alt="PostgreSQL" />
                <br />
                <span>PostgreSQL</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/sqlite.png" alt="SQLite3" />
                <br />
                <span>SQLite3</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/semantic-ui.png" alt="Semantic UI" />
                <br />
                <span>Semantic UI</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/bootstrap.png" alt="Bootstrap" />
                <br />
                <span>Bootstrap</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/adobe/illustrator.png" alt="Illustrator" />
                <br />
                <span>Illustrator</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/adobe/photoshop.png" alt="Photoshop" />
                <br />
                <span>Photoshop</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/adobe/indesign.png" alt="InDesign" />
                <br />
                <span>InDesign</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/adobe/after-effects.png" alt="After Effects" />
                <br />
                <span>After Effects</span>
              </div>
            </div>
            <div className={COLUMN}>
              <div>
                <img src="logos/wordpress.png" alt="WordPress" />
                <br />
                <span>WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
};

export default Tech;