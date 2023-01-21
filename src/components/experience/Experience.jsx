import React from "react";
import "./experience.css";

const Experience = () => {


  return (
    
    <section id="experience">
      <h2> My experiences</h2>
      <div className="container experience_container">
        <div>
          <h3>Software Engineer Intern </h3>
          <article className="experience_card">
            <div className="company_date">
              <div>@Escaype LLC</div>
              <div>Dec. 2022 – Present</div>
            </div>
            <div className="experience_content">
              <p>
                {" "}
                Developed a static webpage to decrease searching and navigating
                time for the company images.
              </p>
            </div>
          </article>
        </div>
        {/* ============================================== */}
        <div>
          <h3>Math-Science Tutor </h3>
          <article className="experience_card">
            <div className="company_date">
              <div>@De Anza College</div>
              <div>Apr. 2022 – Present</div>
            </div>
            <div className="experience_content">
              <p>
                {" "}
                Provide academic support and studying advice to students in
                lower-division math, physics and chemistry courses through one-on-one in-person, online and individual tutoring sessions.{" "}
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
              <div>@De Anza College</div>
              <div>June 2022 – Present</div>
            </div>
            <div className="experience_content">
              <p>
                {" "}
                Install and test Windows 10 and various application software.
              </p>
              <p> Diagnose and troubleshoot software and hardware issues.</p>
            </div>
          </article>
        </div>

        {/* ============================================== */}
        <div>
          <h3>Computer Lab Teaching Assistant </h3>
          <article className="experience_card">
            <div className="company_date">
              <div>@De Anza College</div>
              <div>Sep. 2021 – Present</div>
            </div>
            <div className="experience_content">
              <p>
                {" "}
                Assist students in fixing logic errors and syntax errors in
                programming assignments.
              </p>
              <p>
                Provide suggestions on optimizing coding solutions and
                programming techniques.
              </p>
              <p>
                Instruct basic programming concepts in C++, Java, Python and problem-solving skills.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
