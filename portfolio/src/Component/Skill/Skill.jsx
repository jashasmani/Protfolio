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

const Skill = () => {
  return (
    <section className="my-5">
      <h1
        className="text-center mb-4"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        My Skills
      </h1>
      <div className="row">
        <div className="d-flex justify-content-evenly">
          <div className="d-flex flex-wrap">
            <div className="card p-3 m-3 card-width">
              <img src={SpringBoot} alt="SpringBoot" className="imgSize" />
              Spring Boot
            </div>
            <div className="card p-3 m-3 card-width">
              <img src={nodejs} alt="nodejs" className="imgSize" /> Node JS
            </div>
            <div className="card p-3 m-3 card-width">
              <img src={ReactJS} alt="React" className="imgSize" /> React Js
            </div>
            <div className="card p-3 m-3 card-width">
              <img src={AWS} alt="AWS" className="imgSize" />
              AWS
            </div>
            <div className="card p-3 m-3 card-width">
              <img src={Python} alt="Python" className="imgSize" />
              Python
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-3 d-flex justify-content-center">
          <div className="d-flex flex-wrap">
            <div className="card p-3 m-3 card-width">
              <img src={mdb} alt="mdb" className="imgSize" />
              Mongodb
            </div>
            <div className="card p-3 m-3 card-width">
              <img src={postgres} alt="postgres" className="imgSize" />
              Postgres
            </div>
            <div className="card p-3 m-3 card-width">
              <img src={android} alt="android" className="imgSize" />
              Android Dev
            </div>
            <div className="card p-3 m-3 card-width">
              <img src={github} alt="github" className="imgSize" />
              {/* <img src={} alt="" className="imgSize" /> */}
              MySql
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-3 d-flex justify-content-center">
          <div className="d-flex flex-wrap ">
            <div className="card p-3 m-3 card-width">
              <img src={Java} alt="java" className="imgSize" />
              JAVA
            </div>
            <div className="card p-3 m-3 card-width">
              <img src={ml} alt="ml" className="imgSize" />
              Machine Learning
            </div>
            <div className="card p-3 m-3 card-width">
              <img src={flutter} alt="flutter" className="imgSize" />
              Flutter
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-3 d-flex justify-content-center">
          <div className="d-flex flex-wrap ">
            <div className="card p-3 m-3 card-width">
              <img src={javajs} alt="javajs" className="imgSize" />
              JavaScript
            </div>
            <div className="card p-3 m-3 card-width">
              <img src={css} alt="css" className="imgSize" />
              HTML & CSS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
