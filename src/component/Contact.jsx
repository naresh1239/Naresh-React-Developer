import React from 'react'
import "../App.css"
import "./css-component/Contact.css"

const Contact = () =>{
   
    return (
        <>
           <section  className="contact-section" id='contact'>
               
                   <h3 >What’s Next?</h3>
                   <h1 >Get In Touch</h1>
                   <p >my inbox is always open. 
                       Whether you have a question or just want to 
                       say hi, I’ll try my best to get back to you!</p>
                       <a href="mailto:iamnareshkumawat1@gmail.com"><button className="button secondbtn">Download CV</button></a>
                  
            </section> 
           
            
        </>
    )
}

export default Contact
