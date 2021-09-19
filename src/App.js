// import logo from './logo.svg';
import './App.css';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import img1 from "../src/images/img.jpg"
import img2 from "../src/images/img1.jpg"
import img3 from "../src/images/img2.jpg"
import Home from "./components/home/home";
import About from "./components/about/about";
import Services from "./components/services/services";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
  return (
    <div className="App">

 
      <Router>
        <div>

          {/* ROUTER WORKINGS */}
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
  
          <hr /> */}




          <nav class="navbar navbar-expand-lg navbar-dark  bg-dark " >
  <div class="container-fluid " >
    <a class="navbar-brand text-danger" >Auto Mobile</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-danger"> </span>
    </button>
    <div class="collapse navbar-collapse text-danger" id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
        
          <Link class="nav-link active text-danger" to="/">Home</Link>
        
        </li>
        <li class="nav-item">
        <Link class="nav-link active text-danger" to="/services">Services</Link>
        </li>
       
        <li class="nav-item">
         
         <Link  class="nav-link text-danger" to="/about">About</Link>
     
        </li>
      
     
      </ul>

      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>










          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </div>
    </Router>
    <div class="card-group" >
  <div class="card"  >
    <img src={img1} class="card-img-top" alt="..." height="300px"/>
    <div class="card-body bg-dark"  >
      <h5 class="card-title">Ford Raptor.</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={img2} class="card-img-top" alt="..." height="300px"/>
    <div class="card-body bg-dark">
      <h5 class="card-title">Ford Raptor.</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={img3} class="card-img-top" alt="..." height="300px"/>
    <div class="card-body bg-dark" >
      <h5 class="card-title">Ford Raptor.</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

     
    </div>
  );
}

export default App;
