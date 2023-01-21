import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/port1.png";
import IMG2 from "../../assets/port2.png";
import IMG3 from "../../assets/port3.png";
import IMG4 from "../../assets/port4.png";
import IMG5 from "../../assets/port5.png";
import IMG6 from "../../assets/port6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Cuisine Restaurant",
    github: "https://github.com/trienbanghuynh/Cuisine-Restaurant",
    demo: "https://shaifsrestaurant.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "React Feedback App",
    github: "https://github.com/trienbanghuynh/Feedback-App",
    demo: false,
  },
  {
    id: 3,
    image: IMG3,
    title: "React Github Finder App",
    github: "https://github.com/trienbanghuynh/Github-Finder",
    demo: "https://github-finder-sigma.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "YelpCamp Website",
    github: "https://github.com/trienbanghuynh/YelpCamp",
    demo: false,
  },
  {
    id: 5,
    image: IMG5,
    title: "Mastermind Game",
    github: "https://github.com/trienbanghuynh/Mastermind-Game",
    demo: "https://incredible-queijadas-3b7543.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Sudoku Solver",
    github: "https://github.com/trienbanghuynh/Sudoku-Solver",
    demo: false,
  },
];

const Portfolio = () => {
 

  return (
    <section id="portfolio">
      <h2>Some of my projects</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>

              <div className="portfolio_item-cta">
                <a href={github} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Github
                </a>

                {demo && (
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                    View Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
