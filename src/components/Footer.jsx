import React from "react";


function Footer(){
    const year = new Date().getFullYear();
    
    window.onscroll = function() {scroll()};
      function scroll() {
        const mybutton = document.getElementById("scroll-up");
        
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
  

    function scrollTop(){           
      document.body.scrollTop = 0;
    }

  return (
    <div className="footer text-center " >
    <div className="social-icons py-3">
    <a className="px-3" href="https://github.com/nees101"><i className="fa-brands fa-github fa-2x"></i></a> 
    <a href="/">
   <i className="fa-regular fa-chevrons-up"></i></a>
     <a className="px-3" href="https://linkedin.com/in/neethu-sasidharan-nair-93025829"><i className="fa-brands fa-linkedin fa-2x"></i></a>
   
   </div>
   <div className="attribution">
   Neethu S. Nair ⓒ {year}
  <a href="#" id="scroll-up" onClick={scrollTop}> <i  className=" fa-solid fa-angles-up" ></i> </a>
   </div>
   </div>
    
  );
}

export default Footer;