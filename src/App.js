
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
      <Route path="/" element={<Home />}></Route> 
      <Route path="/Resume" element={<Resume/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
