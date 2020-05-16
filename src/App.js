//imports for ReactJS
import React, { } from 'react';

//import styles
import './App.css';

//imports for  router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Java from "./Components/Java"
import Javascript from "./Components/Javascript"

function App() {
  return (
    <Router>
      <nav id="nav">
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active"
            > Java
              </NavLink>


          </li>

          <li>
            <NavLink to="/javascript" activeClassName="active">Javascript</NavLink>
          </li>

        </ul>
      </nav>

      <div id="main">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" >
            <Principal />
          </Route>
          <Route path="/javascript">
            <Secundario />
          </Route>


        </Switch>
      </div>
      <div id="footer"> <small>&copy; Copyright 2020, <a href="">Freddy Suárez</a><span>&#124;</span><a href="https://www.linkedin.com/in/freddy-armando-suarez/" target="_blank" rel="noopener noreferrer">HIRE</a></small></div>

    </Router>


  );
}

function Principal() {
  return <Java />;
}

function Secundario() {
  return <Javascript />;
}



//Finish router


document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("tr[data-href]");
  rows.forEach(row => {
    row.addEventListener("click", () => {
      window.location.href = row.dataset.href;
    });
  });

})




export default App;
