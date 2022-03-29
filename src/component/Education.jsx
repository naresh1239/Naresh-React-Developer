
import React, { useState, useEffect } from "react";

import Api from "./Api";


const Home = () => {
  
  const [newapi, setnewapi] = useState(Api);
  const [togglestate, settogglestate] = useState(1)

  const filter = (cat,no=1) => {
    const updatedata = Api.filter((elem) => {
      return elem.cat === cat;
    });
    setnewapi(updatedata);
    
   settogglestate(no)
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
              <div className={togglestate === 1 ? " active-btn" : "btn"} onClick={() => filter("skill",1)} >
               Skills
                
              </div>
              <div className={togglestate === 2 ? " active-btn" : "btn"} onClick={() => filter("edu",2)}>
               Qualification
                
              </div>
              <div className={togglestate === 3 ? " active-btn" : "btn"} onClick={() => filter("aim",3)}>
               Goals
              </div>
              <div className={togglestate === 4 ? " active-btn" : "btn"} onClick={() => filter("pro",4)}>
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



export default Home