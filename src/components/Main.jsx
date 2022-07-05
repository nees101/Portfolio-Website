import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";




function Main(){
    return(
     <div>
        <Header />
        <Router> 
            <Routes>
                <Route exact path = "/" element={<Home />} />
                <Route  path = "/about" element ={<About />} />
                <Route  path = "/portfolio" element ={<Portfolio />} />
                <Route  path = "/contact" element ={<Contact />} /> 
            </Routes>
        </Router>
        <Footer />
        </div>
        );
}
export default Main;