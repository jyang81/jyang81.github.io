import React from 'react';

const About = () => {
    return (
      <main className="pic-bg" id="about">
        <h2 className="bold">ABOUT ME</h2>
        <hr style={{color: "#ffffff"}} />
        <div className="about text-bigger">
          <p>
            I'm a graphic designer turned software developer who likes to write semantic code and build things that are useful and creative. Before turning to code, I worked in the advertising industry, designing websites, logos, and all sorts of things for a wide range of clients, from Verizon to local non-profits, winning multiple awards in the process. 
          </p>
          <p>I pride myself in my attention to detail, problem solving persistence, and ability to adapt to any environment. When I'm not coding, I try to enjoy the simple things in life, like making someone laugh out loud, trying a new restaurant, or a hearing a well-crafted dad joke. 
          </p>
        </div>
      </main>
    );
};

export default About;