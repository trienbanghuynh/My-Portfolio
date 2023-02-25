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
    title: "YelpCamp Website",
    github: "https://github.com/trienbanghuynh/YelpCamp",
    demo: false,
  },
  {
    id: 2,
    image: IMG2,
    title: "House Marketplace",
    github: "https://github.com/trienbanghuynh/House-Marketplace",
    demo: "https://house-marketplace-htb.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Support Desk App",
    github: "https://github.com/trienbanghuynh/Support-Desk-App",
    demo: false,
  },
  {
    id: 4,
    image: IMG4,
    title: "Github Finder",
    github: "https://github.com/trienbanghuynh/Github-Finder",
    demo: "https://github-finder-sigma.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Sudoku Solver",
    github: "https://github.com/trienbanghuynh/Sudoku-Solver",
    demo: false,
  },
  {
    id: 6,
    image: IMG6,
    title: "Cuisine Restaurant ",
    github: "https://github.com/trienbanghuynh/Cuisine-Restaurant",
    demo: "https://shaifsrestaurant.netlify.app",
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
                  Github Info
                </a>

                {demo && (
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Demo
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
