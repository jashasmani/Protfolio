import React from "react";
import "./Background.css"; // Import your CSS file with background styles

const Background = () => {
  return (
    <>
      <svg
        className="background-container"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        opacity="0.37"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="105"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="150"
            ry="150"
            cx="367.0014012836476"
            cy="427.57708740234375"
            fill="hsl(37, 99%, 67%)"
          ></ellipse>
          <ellipse
            rx="150"
            ry="150"
            cx="445.9082160614629"
            cy="413.0728358579472"
            fill="hsl(316, 73%, 52%)"
          ></ellipse>
          <ellipse
            rx="150"
            ry="150"
            cx="395.89975561623123"
            cy="338.7496697150189"
            fill="hsl(185, 100%, 57%)"
          ></ellipse>
        </g>
      </svg>
    </>
  );
};

export default Background;
