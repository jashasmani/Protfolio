import React, { useState, useEffect } from "react";
import Profile from "./DP_jash.jpg";
import "./Background.css";
import "./main.css";
import Background from "./Background";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import {
  colors1,
  colorsSet,
  getHoverColors,
  getActiveColors,
} from "../Button/Custom_Button";

const Main = ({ isDarkMode }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const navigate = useNavigate();

  const name = "JASH ASMANI";

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleChars((prev) => (prev < name.length ? prev + 1 : prev));
    }, 300);

    const restartInterval = setInterval(() => {
      setVisibleChars(0);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(restartInterval);
    };
  }, [name.length]);

  return (
    <>
      <section className="container" style={{ padding: "6rem 0" }}>
        <Background />
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center overlay-content backimage">
          <div
            className="text-center"
            style={{
              color: isDarkMode ? "#ffffff" : "#000000",
            }}
          >
            <div className="container">
              <h6 className="title">
                I'M{" "}
                <span className={isDarkMode ? "sub-title-w" : "sub-title-b"}>
                  {name.split("").map((char, index) => (
                    <span
                      key={index}
                      className={isDarkMode ? "sub-title-w" : "sub-title-b"}
                    >
                      {index < visibleChars
                        ? char === " "
                          ? "\u00A0"
                          : char
                        : ""}
                    </span>
                  ))}
                </span>
              </h6>
              <h2 className="subtitle">
                Full Stack Developer & Enterprise Solutions Expert
              </h2>
              <div className="d-flex justify-content-evenly">
                {isDarkMode ? (
                  <>
                    <ConfigProvider
                      theme={{
                        components: {
                          Button: {
                            colorPrimary: `linear-gradient(135deg, ${colorsSet.join(
                              ", "
                            )})`,
                            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                              colorsSet
                            ).join(", ")})`,
                            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                              colorsSet
                            ).join(", ")})`,
                            lineWidth: 0,
                          },
                        },
                      }}
                    >
                      <Button
                        type="primary"
                        size="middle"
                        className="rm-border"
                        onClick={() => navigate("/contact")}
                      >
                        Hire Me
                      </Button>
                      <Button
                        type="primary"
                        size="middle"
                        className="rm-border"
                        onClick={() => navigate("/contact")}
                      >
                        Contact Me
                      </Button>
                    </ConfigProvider>
                  </>
                ) : (
                  <ConfigProvider
                    theme={{
                      components: {
                        Button: {
                          colorPrimary: `linear-gradient(135deg, ${colors1.join(
                            ", "
                          )})`,
                          colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                            colors1
                          ).join(", ")})`,
                          colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                            colors1
                          ).join(", ")})`,
                          lineWidth: 0,
                        },
                      },
                    }}
                  >
                    <Button
                      type="primary"
                      size="middle"
                      className="rm-border-w"
                      onClick={() => navigate("/contact")}
                    >
                      Hire Me
                    </Button>
                    <Button
                      type="primary"
                      size="middle"
                      className="rm-border-w"
                      onClick={() => navigate("/contact")}
                    >
                      Contact Me
                    </Button>
                  </ConfigProvider>
                )}
              </div>
            </div>
          </div>
          <div className="text-center">
            <img
              src={Profile}
              alt="Profile"
              className="my-3"
              style={{
                maxWidth: "250px",
                maxHeight: "250px",
                border: "6px solid white",
                borderRadius: "2rem",
              }}
            />
          </div>
        </div>

        {/* <ConfigProvider
            
            theme={{
              components: {
                Button: {
                  colorPrimary: `linear-gradient(135deg, ${colors.join(", ")})`,
                  colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                    colors
                  ).join(", ")})`,
                  colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                    colors
                  ).join(", ")})`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button type="primary" size="large">
              Gradient 
            </Button>
          </ConfigProvider> */}
      </section>
    </>
  );
};

export default Main;
