import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { RxDiscordLogo } from "react-icons/rx";
// import { useRef } from 'react';
import emailjs from "emailjs-com";
import { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import { useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const fadeProps = useSpring({ opacity: isVisible ? 1 : 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3u3lh5a",
      "template_8fiy03r",
      form.current,
      "gXaUofPDtfk6N5z-L"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact me</h2>
      <div className="container contact_container">
        <animated.div ref={ref} style={fadeProps}>
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact_option-icon" />
              <h4>Email</h4>
              <h5>trienbanghuynh4701@gmail.com</h5>
              <a href="mailto:trienbanghuynh4701@gmail.com" target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <RxDiscordLogo className="contact_option-icon" />
              <h4>Discord</h4>
              <h5>Benben#0631</h5>
              <a href="https://discord.com/channels/@me" target="_blank" rel="noreferrer">
                Send a friend request
              </a>
            </article>
            <article className="contact_option">
              <BsWhatsapp className="contact_option-icon" />
              <h4>WhatsApp</h4>
              <h5>+1 (669) 238 - 6595</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+16692386595"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
        </animated.div>
        {/* end of options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
          ></input>
          <textarea
            name="message"
            rows="15"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
