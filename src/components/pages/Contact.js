import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact-main main">
      <h1>Contact Me</h1>
      <p className="contact-text">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form className="contact-form">
        <div className="contact-form-name-input">
          <div className="name-input">
            <label htmlFor="fname">First name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>
          <div className="name-input">
            <label htmlFor="last name">Last name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="contact-form-email-input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
        </div>
        <div className="contact-form-text-input">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </div>
        <div className="contact-form-checkbox-input">
          <input type="checkbox" className="contact-form-checkbox" />
          <label htmlFor="textarea">
            You agree to providing your data to flutterwave who may contact you.
          </label>
        </div>
        <button id="btn_submit">Send message</button>
      </form>
    </main>
  );
};

export default Contact;
