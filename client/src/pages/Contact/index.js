import React from "react";
import ContactCard from "../../components/ContactCard";

const Contact = () => {
  return (
    <>
      <ContactCard icon="fa-envelope" size="4" descText="Contact" link='"mailto:lettybedard@gmail.com" target="_blank" rel="noopener noreferrer"' linkText="e-mail" />

      {/* <ContactCard icon="fa-file" size="4" descText="Resume" link="" linkText="download" /> */}

      <ContactCard icon="fa-github" size="5" descText="GitHub" link="https://github.com/yttel" linkText="Link" />

      <ContactCard icon="fa-linkedin" size="4" descText="LinkedIn" link="https://www.linkedin.com/in/lettybedard/" linkText="Link" />
    </>
  );
};

export default Contact;