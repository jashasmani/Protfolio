import React from "react";
import { Steps } from "antd";
import {
  description,
  description1,
  description2,
  TechCurrent,
  TSA,
  ReadMeWiz,
} from "./Description";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";

const StepsReact = ({ isDarkMode }) => {
  const items = [
    {
      title: (
        <h3 style={{ fontWeight: "600" }}>
          <a
            href="https://interview-catalyst.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white",textDecoration:'none' }}
          >
            Interview-Catalyst
          </a>
        </h3>
      ),
      status: "finish",
      description: description,
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: (
        <h3 style={{ fontWeight: "600" }}>
          <a
            href="https://github.com/jashasmani/SkyOps-Pro"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration:'none' }}
          >
            SkyOps-Pro
          </a>
        </h3>
      ),
      status: "finish",
      description: description1,
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: (
        <h3 style={{ fontWeight: "600" }}>
          <a
            href="https://read-me-wiz.vercel.app/home"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration:'none' }}
          >
            ReadMeWiz
          </a>
        </h3>
      ),
      status: "finish",
      description: ReadMeWiz,
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: (
        <h3 style={{ fontWeight: "600" }}>
          <a
            href="https://twitter-sentiment-analysis-nlp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration:'none' }}
          >
            TWITTER-SENTIMENT-ANALYSIS-NLP
          </a>
        </h3>
      ),
      status: "finish",
      description: TSA,
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: (
        <h3 style={{ fontWeight: "600" }}>
          <a
            href="https://tech-current.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration:'none' }}
          >
            Tech Current
          </a>
        </h3>
      ),
      status: "finish",
      description: TechCurrent,
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: (
        <h3 style={{ fontWeight: "600" }}>
          <a
            href="https://github.com/jashasmani/Grocery-Store-JDBC"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration:'none' }}
          >
            Grocery Store
          </a>
        </h3>
      ),
      status: "finish",
      description: description2,
      icon: <Brightness1OutlinedIcon />,
    },
  ];

  return (
    <div className={isDarkMode ? "step-bar" : "step-bar-black"}>
      <Steps
        direction="vertical"
        style={{
          fontSize: "1.2rem",
          fontFamily: "Quicksand",
        }}
        current={1}
        items={items}
      />
      {/* <div className="btn-center">
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
                onClick={() => (nav("/project"), setShowMore(true))}
              >
                Show All
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
              onClick={() => (nav("/project"), setShowMore(true))}
            >
              Show All
            </Button>
          </ConfigProvider>
        )}
      </div> */}
    </div>
  );
};

export default StepsReact;
