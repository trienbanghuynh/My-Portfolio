import React from "react";
import "./experience.css";
import { TfiNewWindow } from "react-icons/tfi";

const Experience = () => {
  return (
    <section id="experience">
      <h2> My experiences</h2>
      <div className="container experience_container">
        <div>
          <h3>Software Engineer Intern </h3>
          <article className="experience_card">
            <div className="company_date">
              <div>
                <a
                  href="https://www.escaype.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Escaype LLC <TfiNewWindow />
                </a>
              </div>
              <div>Dec. 2022 – Present</div>
            </div>
            <div className="experience_content">
              <p>
                {" "}
                Collaborated with co-founder of the company to develop a Cloud
                Viewer Images static webpage that decreased searching and
                navigating time for the company images using HTML, CSS,
                Javascript.
              </p>
            </div>
          </article>
        </div>
        {/* ============================================== */}
        <div>
          <h3>Math-Science Tutor </h3>
          <article className="experience_card">
            <div className="company_date">
              <div>
                <a
                  href="https://www.deanza.edu/studentsuccess/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @De Anza College <TfiNewWindow />
                </a>
              </div>
              <div>Apr. 2022 – Present</div>
            </div>
            <div className="experience_content">
              <p>
                {" "}
                Provide academic support and studying advice to 20+ students in
                lower-division math, physics and chemistry courses through
                one-on-one in-person, online and individual tutoring sessions.{" "}
              </p>
              <p>
                {" "}
                Guide students through complex concepts using drawings, creative
                analogies, and simplified terminology.
              </p>
            </div>
          </article>
        </div>

        {/* ============================================== */}

        <div>
          <h3>Computer Lab Technician Intern </h3>
          <article className="experience_card">
            <div className="company_date">
              <div>
                <a
                  href="https://www.deanza.edu/oti/comptechs.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  @De Anza College <TfiNewWindow />
                </a>
              </div>
              <div>June 2022 – Aug. 2022</div>
            </div>
            <div className="experience_content">
              <p>
                {" "}
                Installed and tested Windows 10 and various application
                software.
              </p>
              <p>
                {" "}
                Diagnosed and troubleshot software and hardware issues for 10+
                computers.
              </p>
            </div>
          </article>
        </div>

        {/* ============================================== */}
        <div>
          <h3>Computer Lab Teaching Assistant </h3>
          <article className="experience_card">
            <div className="company_date">
              <div>
                <a
                  href="https://www.deanza.edu/cis/tutoringOnline.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  @De Anza College <TfiNewWindow />
                </a>
              </div>
              <div>Sep. 2021 – Dec. 2022</div>
            </div>
            <div className="experience_content">
              <p>
                {" "}
                Assisted 10+ students in fixing logic errors and syntax errors
                in programming assignments.
              </p>
              <p>
                Provided suggestions on optimizing coding solutions and
                programming techniques.
              </p>
              <p>
                Instructed basic programming concepts in C++, Java, Python and
                problem-solving skills.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
