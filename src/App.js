
import Home from "./pages/Home"
 import Resume from "./pages/Resume"
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
   
       <Switch>
      <Route path="/" exact component={Home}></Route> 
      <Route path="/Resume"  component={Resume}></Route>
      </Switch>
    
    
  );
}

export default App;
