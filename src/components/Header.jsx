import React from "react";
import {Navbar , Nav , Container} from "react-bootstrap";
import CloseButton from 'react-bootstrap/CloseButton'


function Header(){
 
    
    return (
      <div>
       <Navbar collapseOnSelect expand="sm" variant="dark" >
           <Container>
           <Navbar.Brand  href="/"><span className="logo">n<span style={{color:"#F0A500"}} >s</span>n</span></Navbar.Brand>
              <Navbar.Toggle id="toggle" className="togglebtn" aria-controls="responsive-navbar-nav" />
              <CloseButton id="closeBtn" variant="white" aria-label="Hide"/>
              <Navbar.Collapse >
                <Nav className="ms-auto navbg">
                  <Nav.Link className="navlink  ms-4" href="/" >Home</Nav.Link>
                  <Nav.Link className="navlink ms-4" href="/portfolio">Portfolio</Nav.Link>
                  <Nav.Link className="navlink ms-4" href="/contact">Contact</Nav.Link>
               </Nav>
              </Navbar.Collapse >
           </Container>
        </Navbar>
    
      </div>
       
    );
} 

export default Header;