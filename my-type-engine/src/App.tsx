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
      <Home/>
      </Router>
    </div>
  );
}

export default App;
