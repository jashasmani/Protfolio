import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="container pb-5">
      <div className="d-flex flex-column justify-content-center">
        <h1
          className="text-center mb-4 mt-5"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          About Me
        </h1>
        <br />
        <p className="about-text">
          I'm a versatile software developer skilled in a wide array of
          technologies. I build robust back-end services with
          <span className="highlight"> Spring Boot</span> and
          <span className="highlight"> Node.js</span>, and create dynamic
          front-end applications using <span className="highlight">React.js</span>.
          My cloud expertise includes deploying and managing applications on
          <span className="highlight"> AWS</span>. Proficient in
          <span className="highlight"> Python</span>,
          <span className="highlight"> Java</span>, and
          <span className="highlight"> JavaScript</span>, I also excel in database
          management with <span className="highlight">PostgreSQL</span>,
          <span className="highlight"> MySQL</span>, and
          <span className="highlight"> MongoDB</span>. Additionally, I have
          experience in mobile development with
          <span className="highlight"> Android</span> and
          <span className="highlight"> Flutter</span>, and I specialize in
          <span className="highlight"> machine learning</span> and
          <span className="highlight"> data analysis</span>. My diverse skill set
          enables me to tackle complex projects and deliver efficient,
          high-quality solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
