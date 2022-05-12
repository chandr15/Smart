import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
import {Route, Switch} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import Login from './components/Login';
import "./App.css";
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';

// import './components/assets/css/style.css';


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route >
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
