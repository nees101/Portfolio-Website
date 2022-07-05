import React from "react";
import data from  "./../data.json";


function Thumbnail(prop) {
    return (
         <>
      
        <div className="card mb-4 box-shadow " style={{position:"relative"}}>
        <img className="card-img-top" src={prop.image} alt="Preview image" style={{height:300}}/>
        <div className="overlay">
        <div className="card-body text-center px-5" >
          <h2 style={{fontSize:20}}>{prop.title}</h2>
          <p className="card-text text-muted">{prop.skills}</p>
          <p className="card-text">{prop.description}</p>
          
          
          <div className="d-flex justify-content-between align-items-center">
            
              <a href={prop.website} type="button" className="btn btn-sm btn-outline-secondary">View Site</a>
              <a href={prop.code} type="button" className="btn btn-sm btn-outline-secondary">View Github repo</a>
          </div>
        </div>
        </div>
        </div>  

        </>
      );
  }

  function Portfolio() {
      const projects = data.projects;
     return (
     <>
       <div className="projects">
          <div className="container text-center mt-4 portfolio p-3">
            <h2 >Projects</h2>
            <p className="lead  text-muted">Check out some of my latest works.. </p>
          </div>
    
          <div className="row m-lg-5 m-md-5 mx-2 mt-5">
          {projects.map(project =>(
            <div className="col-lg-4 col-md-6 col-sm-12 ">
           <Thumbnail 
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            skills={project.skills}
           website={project.website}
            code={project.code}
           />
           </div>
          ))}
          
          </div>

            <p className="more text-center p-5" style={{color:"white",fontSize:20}}>Checkout my <a href="https://github.com/nees101" style={{color:"#F0A500",background:"none"}}>Github</a> for more..</p>
        </div>
     </>
    );
  }
   


export default Portfolio;