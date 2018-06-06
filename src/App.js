import React, { Component } from "react";
import email from "./email.svg";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="container">
        <header className="section">
          <h1 className="title">Hi there!</h1>
          <p className="text">
            My name is Emre and I am an aspiring web developer who has been
            teaching himself how to code since the spring of 2016.
          </p>
        </header>
        <main className="section">
          <div className="col">
            <h2 className="subtitle">ABOUT ME</h2>
            <p>
              I am a Master student in Social Sciences at Humboldt University
              Berlin and I am about to finish my studies in the summer of 2018.
              Apart from my passion for coding, I love anything DIY, cooking
              great food, traveling and working out regularly.
            </p>
            <p>
              Already since I was a teenager I have always played around with
              the web, building some simple projects and setting up simple
              Wordpress or Joomla systems. In the spring of 2016 I decided to go
              all in on coding and I have not looked back since!
            </p>
          </div>
          <div className="col">
            <h2 className="subtitle">MY LEARNING JOURNEY</h2>
            <p>
              I started out with lots of tutorials and after one year I was able
              to do a 6-month internship at the Copenhagen-based consulting
              company{" "}
              <a href="http://ogtal.dk" className="text-link">
                <b>Analyse & Tal</b>
              </a>. Here I introduced the use of frontend libraries (Vue) and
              worked independently on a large experimental data-science project
              called{" "}
              <a href="https://likeview.surge.sh" className="text-link">
                <b>LikeView</b>
              </a>.
            </p>
            <p>
              I have been privileged to attend a number of conferences, in part
              through helping as a volunteer or receiving a scholarship. All of
              these conferences have been extraordinary experiences that have
              helped me a lot on my journey. In the past year I have attended
              the following conferences:{" "}
              <span style={{ fontStyle: "italic" }}>
                Fullstack London 2017, Coldfront Copenhagen 2017, JSConf
                Budapest 2017, CSSconf EU 2018, JSconf EU 2018, Fullstack London
                2018.
              </span>
            </p>
          </div>
          <div className="col">
            <h2 className="subtitle">TECHNOLOGIES</h2>
            <p>
              <b>Core: </b>HTML/CSS, Javascript
            </p>
            <p>
              <b>Frontend: </b> Vue, Nuxt, React
            </p>
            <p>
              <b>Backend: </b> Node/Express
            </p>
            <p>
              <b>DB: </b> MongoDB, GraphQL
            </p>
            <p>
              <b>Cloud: </b>Netlify, Heroku, Google Cloud, AWS
            </p>
            <p>
              <b>Others: </b>D3.js, Sketch
            </p>
          </div>
          <div className="col">
            <h2 className="subtitle">GET IN TOUCH</h2>
            <div className="logo-container">
              <a href="mailto:creagas@googlemail.com" target="blank">
                <img src={email} alt="" className="logo" />
              </a>
              <a href="https://twitter.com/HiEmreKaraca" target="blank">
                <img src={twitter} alt="" className="logo" />
              </a>
              <a href="https://github.com/emrekaraca" target="blank">
                <img src={github} alt="" className="logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/hiemrekaraca/"
                target="blank"
              >
                <img src={linkedin} alt="" className="logo last-logo" />
              </a>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default App;
