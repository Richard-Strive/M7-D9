import React from 'react';
import Details from "./Components/Details/Details"
import Home from "./Components/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router , Route}from "react-router-dom" 
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
       <Route path="/" exact render={(props)=><Home {...props}/>}/>
       <Route path="/details/:id" exact render={(props)=><Details {...props}/>}/>
      </Router>
    </div>
  );
}

export default App;
