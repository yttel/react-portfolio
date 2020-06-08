import React from "react";

function ContactCard({ icon, size, descText, link, linkText}) {

  return (
    <div class="box-part text-center pb-3 pt-3">
                        
      <i class={`fa ${icon} fa-${size}x`} aria-hidden="true"></i>
                        
			<div class="title">
				<h4>{descText}</h4>
			</div>
                  
      <a href={link}>{linkText}</a>
                  
    </div>
  );
}

export default ContactCard;