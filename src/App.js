
import Home from "./pages/Home"
 import Resume from "./pages/Resume"
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
       <Routes>
      <Route path="newgitreactapp" exact element={<Resume/>}></Route> 
      <Route path="Resume" exact element={}></Route> 
      </Routes>
    </div>
  );
}

export default App;
