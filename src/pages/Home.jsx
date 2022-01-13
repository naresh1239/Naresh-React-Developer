import "../App.css";
import Navbar from "../component/Navbar"
import Welcome from "../component/Welcome"
import About from "../component/About"
import Work from "../component/Work"
import Education from "../component/Education"
import Contact from "../component/Contact"
import Footer from "../component/Footer"


function Home() {
  
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Work />
      <Education/>
      <Contact/>
      <Footer/> 
      
    </>
  );
}

export default Home;
