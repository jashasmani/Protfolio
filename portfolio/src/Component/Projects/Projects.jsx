import React from "react";
import { Steps } from "antd";
import "./project.css";

const description = "This is a description.";

const Projects = () => {
  return (
    <section className="text-center my-5">
      <div>
        <h1 className="mb-5 mt-5" style={{ fontFamily: "Plus Jakarta Sans" }}>
          Projects
        </h1>
        <div className="d-flex justify-content-center align-items-start">
          <div className="step-bar">
            <Steps direction="vertical" size="large" progressDot>
              <Steps.Step title="Finished" description={description} />
              <Steps.Step title="In Progress" description={description} />
              <Steps.Step title="Waiting" description={description} />
            </Steps>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
