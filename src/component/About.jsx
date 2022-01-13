import React,{useEffect} from "react";
import "./css-component/About.css";
import "../App.css"


const About = () => {

  return (
    <>
      <div className="about-div" id="about">
        <div className="container-about">
          <div data-aos="fade-up" className="about-left">
            <div className="heading">
              <h1>0.1 About Me </h1>
              <p>My introduction</p>
            </div>
            <p>
              Hello! My name is Naresh Kumawat and I enjoy creating things that
              live on the internet. Now i am
              learing React.js i love to creact thing by css and html also i am
              searching job in React.js frontend
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div className="about-things">
              <h5>JavaScript (ES6+)</h5>
              <h5>React</h5>
              <h5>HTML</h5>
              <h5>CSS</h5>
              <h5>SASS</h5>
              <h5>GIT</h5>
            </div>
            <a href="/Resume" target="_blank"><button className="button">Download CV</button></a>
            
          </div>
          <div data-aos="fade-up" className="about-right">
          <a href="https://github.com/naresh1239" target="_blank">
            <div className="img-div">
            <img src="./images/my-photo.jpg" alt="" />
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
