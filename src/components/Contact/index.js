import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const ContactForm = () => {

  return (
    <section style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Contact me</h1>
      <div style={{ marginBottom: "1rem" }}>
        <a href="mailto:xvrteo@gmail.com" style={{ fontSize: "1.2rem", color: "#777" }}>
          @xvrteo@gmail.com
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="https://github.com/XvrTeo" target="_blank" rel="noopener noreferrer" style={{ marginRight: "1rem", fontSize: "3rem", color: "#333" }}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/xvrteo/" target="_blank" rel="noopener noreferrer" style={{ marginRight: "1rem", fontSize: "3rem", color: "#0077B5" }}>
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/21822863/xvrteo" target="_blank" rel="noopener noreferrer" style={{ fontSize: "3rem", color: "#FE7A15" }}>
          <FaStackOverflow />
        </a>
      </div>
      <div style={{ marginTop: "2rem", width: "100%", maxWidth: "500px" }}>
        <img
          src="https://cdn.dribbble.com/users/767222/screenshots/2149436/mail-animation.gif"
          alt="Mail Animation"
          style={{ width: "100%", height: "auto", maxHeight: "300px" }}
        />
      </div>
    </section>
  );
};

export default ContactForm;
