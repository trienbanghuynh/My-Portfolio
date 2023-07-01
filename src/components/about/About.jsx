import React from "react";
import "./about.css";
import ME from "../../assets/myavata.jpeg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import { useState } from "react";

const About = () => {
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

  return (
    <section id="about">
     
      <h2>About me</h2>
     
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about_image"></img>
          </div>
        </div>
        <animated.div ref={ref} style={fadeProps}>
          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <small>
                  My name is Trien Bang or just call me Ben. I am currently a
                  student @ De Anza College and going to transfer to 4-year university in Fall 2023 majoring Computer Science. I'm
                  really interested in web developement and problem solving. I have strong knowledge of data structure and algorithm. I am
                  always willing to learn and embrace new challenges, especially
                  in programming and technology. Right now, I am looking for
                  SWE/SDE internship or STEM reseach in the next summer.
                  <br />
                  Please reach out to me!
                </small>
              </article>
            </div>
            <div className="about_socials">
              <a
                href="https://www.linkedin.com/in/trien-bang-huynh-09771321b"
                target="_blank"
                className="about_icon"
                rel="noreferrer"
              >
                <small>LinkedIn </small><BsLinkedin />
              </a>

              <a
                href="https://github.com/trienbanghuynh"
                target="_blank"
                className="about_icon"
                rel="noreferrer"
              >
                <small>Github</small><FaGithub />
              </a>

              <a
                href="https://leetcode.com/trienbanghuynh"
                target="_blank"
                className="about_icon"
                rel="noreferrer"
              >
                <small>LeetCode</small><SiLeetcode />
              </a>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default About;
