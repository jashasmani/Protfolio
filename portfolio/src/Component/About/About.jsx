import React from "react";

const About = () => {
  return (
    <section className="container-1">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="d-flex flex-column justify-content-center">
            <h1 style={{ fontFamily: "Plus Jakarta Sans" }}>About</h1>
            <br />
            <p
              style={{
                paddingLeft: "3rem",
                fontSize: "1.2rem",
                fontFamily: "Quicksand",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              consequatur eum. Quas reiciendis enim tempora minus, obcaecati
              molestiae magnam quibusdam corporis perspiciatis possimus ad
              consequatur illo quos ipsum quaerat tempore? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Expedita, consequatur eum. Quas
              reiciendis enim tempora minus, obcaecati molestiae magnam
              quibusdam corporis perspiciatis possimus ad consequatur illo quos
              ipsum quaerat tempore?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
