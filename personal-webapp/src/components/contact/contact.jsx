import React from "react";
import "./contact.css";

export default function Contact() {
    return(
    <div>
    <div  class="contact-form">
    <h1 class="contact-heading">Contact Me</h1>
    <p className="contact-description">Have a question, opportunity, or just want to say hello? Feel free to reach out! I'd love to connect.

</p>
    <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" class="form-control" required/>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" class="form-control" required/>
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" class="form-control" required></textarea>
         </div>
        <button type="submit" class=" submit-button btn btn-primary">Send</button>
    </form>
    </div>
    </div>
    )
}