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
        // top: 218,
        right: 24,
        position: "fixed",
      }}
    >
      <FloatButton
        icon={<GithubFilled />}
        className="rm-border"
        style={buttonStyle}
      />
      <FloatButton
        icon={<LinkedinFilled />}
        className="rm-border"
        style={buttonStyle}
      />
      <FloatButton
        icon={<WhatsAppOutlined />}
        className="rm-border"
        style={buttonStyle}
      />
    </FloatButton.Group>
  </>
);

export default Social;
