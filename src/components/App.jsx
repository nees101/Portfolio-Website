import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import  "../styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
  
    return (
    <div className="App" >
        
           <Header />
            <Router> 
                <Routes>
                    <Route exact path = "/" element={<Home />} />
                    <Route  path = "/portfolio" element ={<Portfolio />} />
                    <Route  path = "/contact" element ={<Contact />} /> 
                </Routes>
            </Router>
            <Footer />
            
    </div>
            
        );
}

export default App;