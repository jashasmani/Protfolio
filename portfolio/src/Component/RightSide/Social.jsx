import React from "react";
import { FloatButton } from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Social = () => (
  <>
    <FloatButton.Group
      shape="circle"
      style={{
        right: 20,
        position: "fixed",
      }}
    >
      <a
        href="https://github.com/jashasmani"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "2px" }}
        >
        <FloatButton
          icon={<GithubFilled />}
          className="rm-border"
          style={buttonStyle}
          />
      </a>
      <a
        href="https://www.linkedin.com/in/jash-asmani-55b874222/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "2px" }}
        >
        <FloatButton
          icon={<LinkedinFilled />}
          className="rm-border"
          style={buttonStyle}
          />
      </a>
      <a
        href="https://wa.me/6352851339"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "2px" }}
      >
        <FloatButton
          icon={<WhatsAppOutlined />}
          className="rm-border"
          style={buttonStyle}
        />
      </a>
    </FloatButton.Group>
  </>
);

export default Social;
