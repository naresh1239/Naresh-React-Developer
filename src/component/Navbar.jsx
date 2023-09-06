import React, { useState } from "react";
import "./css-component/Navbar.css";
const Navbar = () => {
  // const [show, setshow] = useState();

  // const pagey = window.scrollY +10;
  // console.log("outer"+pagey)
  // window.addEventListener("scroll", function () {
  //   const navpagey = window.pageYOffset;

  //   console.log("inner"+navpagey)
  //   if (pagey < navpagey) {
  //     setshow("navhide");

  //   } else {
  //     setshow("");

  //   }
  // });
  // function activateLasers(){
  //    console.log("d")
  // }

  const [hidenav, sethidenav] = useState();
  const [open, setopen] = useState();

  const sayHello = () => {
    if (hidenav === "hidenav" || open === "open") {
      sethidenav("");
      setopen("");
    } else {
      sethidenav("hidenav");
      setopen("open");
    }
  };

  const [active, setactive] = useState("home");
  const togle = (id = "home") => {
    setactive(id);
  };

  return (
    <>
      <section className={`fullwidth  `}>
        <nav>
          <div className="logo">
            <h4>Naresh - React Developer</h4>
          </div>
          <div className="icon">
            <ul>
              <li className="li">
                <a
                  href="#"
                  className={active === "home" ? "active " : ""}
                  onClick={() => togle("home")}
                >
                  HOME
                </a>
              </li>
              <li className="li">
                <a
                  href="#about"
                  className={active === "about" ? "active " : ""}
                  onClick={() => togle("about")}
                >
                  ABOUT
                </a>
              </li>
              <li className="li">
                <a
                  href="#work"
                  className={active === "work" ? "active " : ""}
                  onClick={() => togle("work")}
                >
                  WORK
                </a>
              </li>
              <li className="li">
                <a
                  href="#education"
                  className={active === "education" ? "active " : ""}
                  onClick={() => togle("education")}
                >
                  EDUCATION
                </a>
              </li>
              <li className="li">
                <a
                  href="#contact"
                  className={active === "contact" ? "active " : ""}
                  onClick={() => togle("contact")}
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <div onClick={sayHello} className={`menu ${open} `}>
              <div className="menu-lines_one"></div>
              <div className="menu-lines_two"></div>
              <div className="menu-lines_three"></div>
            </div>
          </div>
          {/* second nav */}
          <div className={`burger ${hidenav}`}>
            <ul>
              <li>
                <a
                  href="#"
                  className={active === "home" ? "active " : ""}
                  onClick={() => togle("home")}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={active === "about" ? "active " : ""}
                  onClick={() => togle("about")}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className={active === "work" ? "active " : ""}
                  onClick={() => togle("work")}
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className={active === "education" ? "active " : ""}
                  onClick={() => togle("education")}
                >
                  EDUCATION
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={active === "contact" ? "active " : ""}
                  onClick={() => togle("contact")}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          {/* ends here */}
        </nav>
      </section>
    </>
  );
};

export default Navbar;
