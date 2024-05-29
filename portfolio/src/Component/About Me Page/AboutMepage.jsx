import React, { useState } from "react";
import "../Contact/Contact.css";
import Footer from "../Footer/Footer";

const AboutMepage = ({ isDarkMode }) => {
  return (
    <section className="container d-flex justify-content-center ">
      <div className="content">
        <h1
          className="text-center mb-4"
          style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "600" }}
        >
          About Me
        </h1>
        <p className="about-text">
          I'm a versatile software developer skilled in a wide array of
          technologies. I build robust back-end services with
          <span className="highlight"> Spring Boot</span> and
          <span className="highlight"> Node.js</span>, and create dynamic
          front-end applications using{" "}
          <span className="highlight">React.js</span>. My cloud expertise
          includes deploying and managing applications on
          <span className="highlight"> AWS</span>. Proficient in
          <span className="highlight"> Python</span>,
          <span className="highlight"> Java</span>, and
          <span className="highlight"> JavaScript</span>, I also excel in
          database management with <span className="highlight">PostgreSQL</span>
          ,<span className="highlight"> MySQL</span>, and
          <span className="highlight"> MongoDB</span>. Additionally, I have
          experience in mobile development with
          <span className="highlight"> Android</span> and
          <span className="highlight"> Flutter</span>, and I specialize in
          <span className="highlight"> machine learning</span> and
          <span className="highlight"> data analysis</span>. My diverse skill
          set enables me to tackle complex projects and deliver efficient,
          high-quality solutions.
        </p>
        <Footer />
      </div>
    </section>
  );
};

export default AboutMepage;
