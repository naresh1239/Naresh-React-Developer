import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./css-component/Home.css";
 import Aos from "aos";
 import "aos/dist/aos.css";

const Welcome = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [screenvalue, setscreenvalue] = useState();
  const [flex, setflex] = useState(screenvalue);

window.addEventListener("scroll",function(){
 if( window.innerWidth < 527){
setscreenvalue(200)
 }else{
  setscreenvalue(600)
 }
})
  window.addEventListener("scroll", function () {
    const scroll = window.scrollY /23*25;
    const text = scroll + screenvalue + "px";
    setflex(text);
  });

  return (
    <>
      <section className="section">
        <h5>
          Scroll down <i className="bi bi-arrow-right"></i>
        </h5>
        <div className="container d-flex">
          <h1 style={{ left: flex }}>ANONYMOUS</h1>
          <div data-aos="fade-up" className="left-home">
            <h4>
              Hi, I'am{" "}
              <span className="auto-input">
                <Typewriter
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={[
                    "Naresh Kumawat",
                    "React-Developer",
                    "Front-end Developer",
                  ]}
                />
              </span>
            </h4>
            <p>
            High level experience in Front-end web developement knowledge.
              <br />
              Producing quality work.
            </p>
          </div>
          <div className="links">
            <div className="list">
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-linkedin"></i>
            </div>

            <a href="https://github.com/naresh1239" target="_blank">
              <div className="list">
                <i className="bi bi-github"></i>
                <i className="bi bi-github"></i>
              </div>
            </a>
            <a href="https://github.com/naresh1239" target="_blank">
              <div className="list">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-instagram"></i>
              </div>
            </a>
          </div>

          <div className="mouse">
            <div className="dot"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
