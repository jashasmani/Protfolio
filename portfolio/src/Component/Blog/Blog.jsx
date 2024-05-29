import React, { useState } from "react";
import "../Contact/Contact.css";
import Footer from "../Footer/Footer";

const Blog = ({ isDarkMode }) => {
  return (
    <section className="container d-flex justify-content-center">
      <div className="content">
        <h1
          className="text-center mb-4"
          style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "600" }}
        >
          Blog
        </h1>
        <div>
          <h4>Exploring My Journey in Web Development</h4>
          <hr />
          <br />
          <p className="about-text">
            Welcome to my portfolio! I am Jash Asmani, a passionate web
            developer dedicated to creating seamless digital experiences. My
            journey in web development began with a fascination for technology
            and has evolved into a deep commitment to crafting responsive,
            user-friendly websites and applications. Specializing in modern
            technologies such as React, Node.js, and Material-UI, I continually
            strive to stay at the forefront of industry trends. Each project is
            an opportunity to innovate and bring ideas to life. Explore my
            portfolio to see how I transform concepts into interactive solutions
            that enhance user engagement and satisfaction.
          </p>
        </div>
          <Footer/>
      </div>
    </section>
  );
};

export default Blog;
