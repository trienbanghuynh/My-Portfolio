import React from "react";
import "./header.css";
import CTA from "./CTA";
import { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import { useState } from "react";

const Header = () => {

 
  //  ===================================
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
    <>
   
    <animated.div ref={ref} style={fadeProps}>
   
      <header>
        <div className="container header_container">   
          <h4>Hello! I'm</h4>
          <h1>Trien Bang Huynh</h1>
          <h5 className="text-light">Aspring Software Engineer</h5>
         
          <CTA />
          <a href="#contact" className="scroll_down">
            Scroll down
          </a>
        </div>
      </header>
    </animated.div>
    </>
  );
};


export default Header;
