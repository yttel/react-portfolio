import React from "react";


const Contact = () => {
  return (
    <>
    {/* <h1>CONTACT</h1> */}

    <div class="box-part text-center pb-3 pt-3">
                        
      <i class="fa fa-envelope fa-3x" aria-hidden="true"></i>
                        
			<div class="title">
				<h4>Contact</h4>
			</div>
                  
      <a href="mailto:lettybedard@gmail.com" target="_blank" rel="noopener noreferrer">e-mail</a>
                  
    </div>

    {/* <div class="box-part text-center pb-3">
                        
      <i class="fa fa-file-download" aria-hidden="true"></i>
                        
			<div class="title">
				<h4>Resume</h4>
			</div>
                  
      <a href="#">Download</a>
                  
    </div> */}

    <div class="box-part text-center pb-3">
                        
      <i class="fab fa-github fa-3x" aria-hidden="true"></i>
                        
			<div class="title">
				<h4>github</h4>
			</div>
                  
      <a href="https://github.com/yttel">Link</a>
                  
    </div>

    <div class="box-part text-center">
                        
      <i class="fab fa-linkedin fa-3x" aria-hidden="true"></i>
                        
			<div class="title">
				<h4>linkedin</h4>
			</div>
                  
      <a href="https://www.linkedin.com/in/lettybedard/">Link</a>
                  
    </div>

    </>
  );
};

export default Contact;