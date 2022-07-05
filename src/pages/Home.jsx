import React from "react";
import picture from "./assets/my-pic.jpg";


function Home(){
    return (
      <div className="home">
      
          <div className="intro text-left ">
             <h1 >Hi! I'm Neethu Nair.</h1>
             <p className="mt-2">I'm a Front-End Web Developer based in Austin, TX </p>
             
             <a href="#about" type="button" className="btn btn-outline-light mt-2">ABOUT ME <i className="fa-solid fa-angles-down"></i></a>   
           
          </div>
          
          <div className="py-4" id="about" >
               <h2 className="text-center py-5 title"style={{color:"#F0A500"}}>Who Am I ?</h2>
          
               <div className="row mb-5 aboutrow"> 
                  <div className="col-12 col-md-6 col-lg-6" >
                  <div className="pic-box m-auto">
                    <div className="frame"> </div>
                    <div className="slide">
                     <img className="my-pic" src={picture} alt="My picture"/>
                     </div>
                     </div> 
                  </div>
                  <div className ="col-12  col-md-6 col-lg-6 px-5 aboutme">
                  
                     <p > I’m an aspiring front-end developer looking for a new role in an exciting company. I have been self learning how to create websites focusing on writing accessible HTML, using modern CSS practices and writing clean JavaScript. 
                     I’m based in Austin, TX, but I’m open to working remotely as well.
                     </p>
                     <p> When I’m not coding, you’ll find me outdoors. I’d love you to check out my work.</p>
                      <a href="/portfolio" type="button" className="btn btn-outline-light  ">GO TO PORTFOLIO  <i className="fa-solid fa-angles-right"></i></a>
                  </div>
                </div>
          </div>
                  <div className="skills">
                      <h3 className="text-center ">SKILLS & TOOLS <i className="fa-solid fa-screwdriver-wrench "></i></h3>
    
                      <p className="text-center text-muted mb-5" >The skills, tools and technologies  I’ve been working with recently..</p>
                      <div className="text-center" >
                        <div className="box-icon">
                          <i className="devicon devicon-html5-plain-wordmark" aria-hidden="true"></i>
                       </div>
                       <div className="box-icon">
                          <i className=" devicon devicon-css3-plain-wordmark"></i>
                       </div>
                       <div className="box-icon">
                          <i className="devicon devicon-javascript-plain"></i>
                       </div>
                       <div className="box-icon">
                       <i className="fa-solid fa-mobile-screen fa-3x"></i>
                          <p>Responsive Web Design</p>
                       </div>
                       <div className="box-icon">
                         <i className="devicon devicon-jquery-plain-wordmark"></i>
                       </div>
                       <div className="box-icon">
                           <i className="devicon devicon-react-original-wordmark"></i>
                       </div>
                       <div className="box-icon">
                         <i className="devicon devicon-bootstrap-plain-wordmark"></i>
               
                        </div>
                       <div className="box-icon">
                         <i className="fas fa-3x fa-cogs" aria-hidden="true"></i>
                          <p>API</p>
                       </div>
                        <div className="box-icon">
                          <i className="devicon devicon-git-plain-wordmark"></i>
                  
                        </div>
                        <div className="box-icon">
                          <i className="devicon devicon-github-original-wordmark"></i>
                
                        </div>
                        <div className="box-icon">
                          <i className="fa-solid fa-terminal fa-2x"></i>
                         <p>Terminal</p>
                       </div>
                       <div className="box-icon">
                         <i className="devicon devicon-vscode-plain-wordmark"></i>
                        </div>
                  
                        <div className="box-icon">
                           <i className=" devicon devicon-atom-original-wordmark " style={{fontSize:100}}></i>
                        </div>
                        <div className="box-icon">
                        <i className="devicon-chrome-plain"style={{fontSize:50}}></i>
                          <p>Chrome Dev Tools</p>
                       </div>
                      </div>
                   </div>
                   <div className="text-center CTA">
               <p>Interested to connect with me?</p>
               
                <a href="/contact" type="button" className="btn btn-outline-light ">GET IN TOUCH</a>
                 
              </div>
            
                 </div> 
              
       
        
    
    );
}

export default Home;