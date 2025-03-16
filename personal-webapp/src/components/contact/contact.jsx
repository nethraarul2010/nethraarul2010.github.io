import React, { useState } from "react";
import "./contact.css";
import { send } from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_s96ziar",
      "template_vg3y868",
      toSend,
      "Q4qotE9BrLjx9j1wM"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Message failed to send. Please try again.");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-form">
      <h1 className="contact-heading">Contact Me</h1>
      {/* <DotLottieReact
      src="https://lottie.host/16ae0a92-690c-4e70-93e6-c1287462d8fc/q2CmmqeRDk.lottie"
      loop
      autoplay
    /> */}
      <p className="contact-description">
        Have a question, opportunity, or just want to say hello? Feel free to reach out! I'd love to connect.
      </p>
      <div className="social-icons">
            <a href="https://www.linkedin.com/in/kamalanethraarul/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/nethraarul2010" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:arulmozhi.k@northeastern.edu">
              <FaEnvelope className="social-icon" />
            </a>
          </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            className="form-control"
            value={toSend.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="from_email">Email</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            className="form-control"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            value={toSend.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}
