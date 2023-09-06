import React,{useEffect} from "react";
import "./css-component/About.css";
import "../App.css"
import mine from "../images/my-photo.jpg"

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
            Frontend React Developer

Naresh Kumhar

I am a Frontend React Developer with 1.6 years of experience. I am proficient in React, Redux, Redux-Saga, HTML, CSS, JavaScript, and Node.js. I can create beautiful front ends using CSS. I have developed a ChatApp and an e-commerce clone on my own. I am self-taught and have a strong passion for learning new things. I am currently working at Sambodhi Research and Communications, a product-based company.

I am a highly motivated and results-oriented individual with a strong work ethic. I am also a team player and enjoy working with others to achieve common goals. I am confident that I can make a significant contribution to your team.

If you are looking for a talented and motivated Frontend React Developer, I would be a great fit for your company. Please feel free to contact me at iamnareshkumawat1@gmail.com.


#javascriptdeveloper
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div className="about-things">
              <h5>JavaScript (ES6+)</h5>
              <h5>React</h5>
              <h5>HTML</h5>
              <h5>CSS</h5>
              <h5>GIT</h5>
              <h5>Tailwind css</h5>
              <h5>Redux</h5>
              <h5>Typescript</h5>
              <h5>REST Api</h5>
              <h5>Fontend developer</h5>
            </div>
            <a href="https://in.linkedin.com/in/naresh-kumhar-330126201" target="_blank"><button className="button">Download CV</button></a>
            
          </div>
          <div data-aos="fade-up" className="about-right">
          <a href="https://github.com/naresh1239" target="_blank">
            <div className="img-div">
            <img src='https://media.licdn.com/dms/image/D4D03AQHLXj0OhDyRJg/profile-displayphoto-shrink_800_800/0/1688300241393?e=2147483647&v=beta&t=kcakkP-BGjeyj3PA8KxYEuqEaieVkNwy3tR5X9Fg3Uk' alt="s" />
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
