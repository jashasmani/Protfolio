import React from "react";
import { Steps } from "antd";
import {
  description,
  description1,
  description2,
  TechCurrent,
  TSA,
  ReadMeWiz
} from "./Description";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";

const StepsReact = ({ isDarkMode }) => {
  const items = [
    {
      title: <h2 style={{ fontWeight: "600" }}>Interview-Catalyst</h2>,
      description,
      status: "finish",
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: <h2 style={{ fontWeight: "600" }}>SkyOps-Pro</h2>,
      status: "finish",
      description: description1,
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: (
        <h2 style={{ fontWeight: "600" }}>ReadMeWiz</h2>
      ),
      status: "finish",
      description: ReadMeWiz,
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: (
        <h2 style={{ fontWeight: "600" }}>TWITTER-SENTIMENT-ANALYSIS-NLP</h2>
      ),
      status: "finish",
      description: TSA,
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: <h2 style={{ fontWeight: "600" }}>Tech Current</h2>,
      status: "finish",
      description: TechCurrent,
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: <h2 style={{ fontWeight: "600" }}>Grocery Store</h2>,
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
