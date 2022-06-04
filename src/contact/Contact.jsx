import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ..
AOS.init({
  duration: 2000,
});

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3752juf",
      "template_c8fgv1w",
      form.current,
      "F6wuW0P6x0WS_fDj7"
    );

    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <ToastContainer />
      <div>
        <h1>Get In Touch</h1>
      </div>

      <div className="contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>My Email</h4>
            <h5>qamarularifin@hotmail.com</h5>
            <a href="mailto:qamarularifin@hotmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>My WhatsApp</h4>
            <h5>+65 94595435</h5>
            <a
              href="https://api.whatsapp.com/send?phone=94595435"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Key in your message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => toast("Thank you for contacting me!")}
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
