import React, { useEffect } from "react";
 import "./css-component/Work.css";
import two from "../images/project1-min.png"
import one from "../images/project2-min.png"
import three from "../images/project3-min.png"

const Work = () => {

  return (
    <>
      <section className="work-section" id="work">
        <div className="work-container">
          <div className="work-heading">
            <h1>My Recent Work</h1>

            <p>Few Things I’ve Built.</p>
          </div>

          {/* start */}
          <div className="work">
            <div data-aos="fade-up" className="left-work">
              <a href="https://naresh1239.github.io/be-strong/" target="_blank">
                <div className="work-img">
                  <img src={one} alt="" />
                </div>
              </a>
            </div>

            <div data-aos="fade-up" className="right-work">
              <a href="https://github.com/naresh1239" target="_blank">
                <h5>Featured Project</h5>
              </a>
              <h1>Be Strong</h1>
              <div className="work-info">
                <p>
                  Health website in react.js with bootstrap-5 website in all about
                  how to be fit in your daily life you can also check your BMI
                  there and make note also there is a firebase data base so now
                  you can send message me.
                </p>
              </div>
              <p>thing that i have use in this project was</p>
              <p>vscode html5 bootstrap css3 javascript react firebase</p>
            </div>
          </div>

          {/* end */}
          {/* start */}

          <div data-aos="fade-up" className="work">
            <div className="right-work">
              <a href="https://github.com/naresh1239" target="_blank">
                <h5>Featured Project</h5>
              </a>
              <h1>payapp</h1>
              <div className="work-info">
                <p>
                  payapp website in react.js with bootstrap-5 firebase website
                  is all about paymet app
                </p>
              </div>
              <p>thing that i have use in this project was</p>
              <p>vscode html5 bootstrap css3 javascript react firebase</p>
            </div>

            <div data-aos="fade-up" className="left-work">
              <a
                href="https://naresh1239.github.io/payme/"
                target="_blank"
              >
                <div className="work-img">
                  <img src={two} alt="" />
                </div>
              </a>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div data-aos="fade-up" className="work">
            <div className="left-work">
              <a
                href="http://kumawatishere.herokuapp.com/"
                target="_blank"
              >
                <div data-aos="fade-up" className="work-img">
                  <img src={three} alt="" />
                </div>
              </a>
            </div>
            <div data-aos="fade-up" className="right-work">
              <a href="https://github.com/naresh1239" target="_blank">
                <h5>Featured Project</h5>
              </a>
              <h1>Kumawatishere</h1>
              <div data-aos="fade-up" className="work-info">
                <p>This is my first portfolio with pure html and css</p>
              </div>
              <p>thing that i have use in this project was</p>
              <p>vscode html5 css3 javascript </p>
            </div>
          </div>
          {/* end */}
        </div>
      </section>
    </>
  );
};

export default Work;
