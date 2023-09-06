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
             {/* start */}

          <div data-aos="fade-up" className="work">
            <div className="right-work">
              <a href="https://github.com/naresh1239" target="_blank">
                <h5>Featured Project</h5>
              </a>
              <h1>FoodNetwork</h1>
              <div className="work-info">
                <p>
                Foodnetwork is a food recipes website where you can search and 
                find recipes, add them to your cart, favourites, login, logout, and
                 many more features. The go and find it out click image.
                </p>
              </div>
              <p>thing that i have use in this project was</p>
              <p>vscode html5 bootstrap css3 javascript react redux apis parcel </p>
            </div>

            <div data-aos="fade-up" className="right-work">
              <a
                href="https://naresh1239.github.io/foodhub"
                target="_blank"
              >
                <div className="work-img">
                  <img src='https://ik.imagekit.io/hbbehfp0d/Screenshot%20from%202023-09-06%2013-41-59.png?updatedAt=1693988143560' alt="" />
                </div>
              </a>
            </div>
          </div>
          {/* end */}
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
              <h1>Photo editor</h1>
              <div className="work-info">
                <p>
                It's a photo editor where I have used pure JavaScript to develop it from scratch. You can edit your photo and download it.
                </p>
              </div>
              <p>thing that i have use in this project was</p>
              <p>vscode html5 bootstrap css3 pure javascript </p>
            </div>

            <div data-aos="fade-up" className="left-work">
              <a
                href="https://naresh1239.github.io/photoEditor/"
                target="_blank"
              >
                <div className="work-img">
                  <img src='https://ik.imagekit.io/hbbehfp0d/Screenshot%20from%202023-09-06%2013-41-28.png?updatedAt=1693988143500' alt="" />
                </div>
              </a>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div data-aos="fade-up" className="work">
            <div className="left-work">
              <a
                href="https://naresh1239.github.io/ReactReduxSocialApp/"
                target="_blank"
              >
                <div data-aos="fade-up" className="work-img">
                  <img src='https://ik.imagekit.io/hbbehfp0d/Screenshot%20from%202023-09-06%2013-41-43.png?updatedAt=1693988143503' alt="" />
                </div>
              </a>
            </div>
            <div data-aos="fade-up" className="right-work">
              <a href="https://github.com/naresh1239" target="_blank">
                <h5>Featured Project</h5>
              </a>
              <h1>Kumawatishere</h1>
              <div data-aos="fade-up" className="work-info">
                <p>its a e-commers website like amazone where you can add product to cart and remove then have pagination and darkmode and many more things</p>
              </div>
              <p>thing that i have use in this project was</p>
              <p>vscode html5 css3 javascript react redux tailwind css bootstrap ES6</p>
            </div>
          </div>
          {/* end */}
        </div>
      </section>
    </>
  );
};

export default Work;
