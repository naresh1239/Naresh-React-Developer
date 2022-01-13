import React, { useState, useEffect } from "react";
import "./css-component/Education.css";
import Api from "./Api";


const Education = () => {
  
  const [newapi, setnewapi] = useState(Api);


  const filter = (cat) => {
    const updatedata = Api.filter((elem) => {
      return elem.cat === cat;
    });
    setnewapi(updatedata);
   
  };

    useEffect(() => {
      filter("skill");
      
    }, []);

  return (
    <>
      <section  className="education-section" id="education">
        <div className="education-contaier">
          <div className="edu-center">
            <h1>Qualification and Skills</h1>
            <p>My personal journey</p>
          </div>
          <div data-aos="fade-up" className="edu-flex">
            <div className="edu-left">
              <div className={`btn `} onClick={() => filter("skill")}>
                Skills
              </div>
              <div className={`btn `} onClick={() => filter("edu")}>
                Qualification
              </div>
              <div className={`btn `} onClick={() => filter("aim")}>
                Goals
              </div>
              <div className={`btn `} onClick={() => filter("pro")}>
                Projects
              </div>
            </div>
            <div data-aos="fade-up" className="edu-right">
              {newapi.map((elem) => {
                return (
                  <>
                    <div className="main-div" key={elem.id}>
                      <h1>{elem.title}</h1>
                      <p>{elem.ex}</p>
                      <p>{elem.p}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
