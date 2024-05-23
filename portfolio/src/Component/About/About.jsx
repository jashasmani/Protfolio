import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="container-1">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="d-flex flex-column justify-content-center">
            <h1
              className="text-center mb-4 mt-5"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              About Me
            </h1>
            <br />
            <p
              className="about-text"
              
            >
              I'm a versatile software developer skilled in a wide array of
              technologies. I build robust back-end services with Spring Boot
              and Node.js, and create dynamic front-end applications using
              React.js. My cloud expertise includes deploying and managing
              applications on AWS. Proficient in Python, Java, and JavaScript, I
              also excel in database management with PostgreSQL, MySQL, and
              MongoDB. Additionally, I have experience in mobile development
              with Android and Flutter, and I specialize in machine learning and
              data analysis. My diverse skill set enables me to tackle complex
              projects and deliver efficient, high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
