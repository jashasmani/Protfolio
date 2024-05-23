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
      <FloatButton icon={<GithubFilled />} style={buttonStyle} />
      <FloatButton icon={<LinkedinFilled />} style={buttonStyle} />
      <FloatButton icon={<WhatsAppOutlined />} style={buttonStyle} />
    </FloatButton.Group>
  </>
);

export default Social;
