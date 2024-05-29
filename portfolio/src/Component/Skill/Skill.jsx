import React from "react";
import "./Skill.css";
import SpringBoot from "./Img/Spring_Boot.png";
import Java from "./Img/java.png";
import ReactJS from "./Img/reactjs.png";
import AWS from "./Img/aws.png";
import Python from "./Img/python.png";
import postgres from "./Img/postgres.png";
import android from "./Img/android.png";
import github from "./Img/GitIcon.png";
import mdb from "./Img/mdb.png";
import css from "./Img/css.png";
import flutter from "./Img/flutter.png";
import javajs from "./Img/js.png";
import nodejs from "./Img/nodejs.png";
import ml from "./Img/ml.webp";

const Skill = ({ isDarkMode }) => {
  return (
    <section className="my-5">
      <h1
        className="text-center pb-5"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        My Skills
      </h1>
      <div className="skills-container">
        <div className="skills-row">
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={SpringBoot} alt="SpringBoot" className="imgSize" />
            Spring Boot
          </div>
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={nodejs} alt="nodejs" className="imgSize" /> Node JS
          </div>
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={ReactJS} alt="React" className="imgSize" /> React Js
          </div>
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={Python} alt="python" className="imgSize" /> Python
          </div>
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={mdb} alt="mdb" className="imgSize" />
            MongoDB
          </div>
        </div>
        <div className="skills-row">
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={postgres} alt="postgres" className="imgSize" />
            Postgres
          </div>
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={android} alt="android" className="imgSize" />
            Android Dev
          </div>
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={github} alt="github" className="imgSize" />
            MySQL
          </div>
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={Java} alt="java" className="imgSize" />
            JAVA
          </div>
        </div>
        <div className="skills-row">
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={AWS} alt="AWS" className="imgSize" />
            AWS
          </div>
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={ml} alt="ml" className="imgSize" />
            Machine Learning
          </div>
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={flutter} alt="flutter" className="imgSize" />
            Flutter
          </div>
        </div>
        <div className="skills-row">
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={javajs} alt="javajs" className="imgSize" />
            JavaScript
          </div>
          <div
            className={isDarkMode ? "card card-width bw" : "card card-width bb"}
            style={{
              background: "transparent",
              color: isDarkMode ? "aliceblue" : "",
            }}
          >
            <img src={css} alt="css" className="imgSize" />
            HTML & CSS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
