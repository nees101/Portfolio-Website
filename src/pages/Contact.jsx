import React from "react";
import emailjs from 'emailjs-com';
import resume from "./assets/Resume.pdf";



function Contact(){



window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_to6quka', "template_ooy7e5r" , "#contact-form", "0vu1Wx9yCMHAAXM5m")
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

    return (
    <div className="contact" >
        <h2 className="text-center m-5 py-3" style={{background:"#1A374D"}}><i className="fa-solid fa-envelope  " ></i> Get In Touch</h2>
        <div className="row p-5">
            <div className="col-12 col-lg-6 p-lg-5 getintouch" >
               <p style={{color:"#F0A500", letterSpacing:1 , fontSize:18}}>Got something you'd like to ask? </p>
               <p style={{color:"#F0A500", letterSpacing:1 , fontSize:18}}> Or, want to hire me? </p>
               
               <p className=" py-3 " style={{lineHeight:2}}>I’m currently looking for a new role and am open to a wide range of opportunities. Please do feel free to check out my online profiles below and get in touch using the form or e-mail me directly @ <a href="mailto:nees101@gmail.com" style={{color:"#F0A500"}}>nees101@gmail.com</a> </p>
               <p>View / Download my <a className="resume" href={resume} >Resume</a>.</p> 
              
            </div>
            <div className="col-12 col-lg-6">
            
              <div className="wrapper m-auto">
              <h3 className="text-center pt-1" style={{fontSize:20}}> Say Hello <i className="fa-regular fa-hand fa-shake" style={{fontSize:30, paddingTop:10}}></i>  </h3>
                  <form id="contact-form" enctype="multipart/form-data" name="ContactForm" className="mx-lg-5 py-4">
                     <input className="sign-up" type="text"  name="user_name" placeholder="Name"  required/>
                     <input type="hidden"  name="to_name" value="Neethu"></input>
                     <input className="sign-up" type="email"  name="user_email" placeholder="Email"  required/>
                     <textarea className="py-4" type="text"  name="message" placeholder="Message" required/>
                     <input className="mt-2 px-3 py-1" value="Submit" type="submit" />   
                 </form>
             </div> 
            </div>
        </div>
         
    </div>
    );   
}


export default Contact;
