
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';

import Courses from './Components/Courses/Courses';
import About from './Components/Aboutous/About';
import Contact from './Components/Contact/Contact';



function App() {

  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>

          <Route path="/home">
            <Home></Home>

          </Route>

          <Route path="/services">
            <Courses></Courses>

          </Route>

          <Route path="/about">
            <About></About>

          </Route>

          <Route path="/contact">
            <Contact/>

          </Route>

          <Route path="*">
            <Error></Error>

          </Route>
        </Switch>
      </Router>

       
    </div>
  );
}

export default App;
