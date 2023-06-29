import React from "react";
import "./skill.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import { useState } from "react";

const Skills = () => {
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
    <animated.div ref={ref} style={fadeProps}>
      <section id="skill">
        <h2> My technical skills</h2>
        <div className="container skill_container">
          <div className="skill_fontend">
            <h3>Fontend Development</h3>
            <div className="skill_content">
              <article className="skill_details">
                <BsPatchCheckFill className="skill_details-icon" />
                <h4>HTML</h4>
              </article>
              <article className="skill_details">
                <BsPatchCheckFill className="skill_details-icon" />
                <h4>CSS</h4>
              </article>
              <article className="skill_details">
                <BsPatchCheckFill className="skill_details-icon" />
                <h4>Javascript</h4>
              </article>
              <article className="skill_details">
                <BsPatchCheckFill className="skill_details-icon" />
                <h4>React.js</h4>
              </article>
              <article className="skill_details">
                <BsPatchCheckFill className="skill_details-icon" />
                <h4>Bootstrap</h4>
              </article>
              <article className="skill_details">
                <BsPatchCheckFill className="skill_details-icon" />
                <h4>Tailwind</h4>
              </article>
            </div>
          </div>
          {/* end of frontend */}
          <div className="skill_backend">
            <h3>Backend Development</h3>
            <div className="skill_content">
              <article className="skill_details">
                <BsPatchCheckFill className="skill_details-icon" />
                <h4>MongoDB</h4>
              </article>
              <article className="skill_details">
                <BsPatchCheckFill className="skill_details-icon" />
                <h4>Node.js</h4>
              </article>
              <article className="skill_details">
                <BsPatchCheckFill className="skill_details-icon" />
                <h4>Python</h4>
              </article>
              <article className="skill_details">
                <BsPatchCheckFill className="skill_details-icon" />
                <h4>SQL</h4>
              </article>
            </div>
          </div>
        </div>
      </section>
    </animated.div>
  );
};

export default Skills;
