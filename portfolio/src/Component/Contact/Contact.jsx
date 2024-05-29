import React, { useState } from "react";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider } from "antd";
const colors1 = ["#6253E1", "#04BEFE"];

const Contact = ({ isDarkMode }) => {
  const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let inputErrors = {};
    if (!formData.name) inputErrors.name = "Name is required";
    if (!formData.email) inputErrors.email = "Email is required";
    if (!formData.subject) inputErrors.subject = "Subject is required";
    if (!formData.message) inputErrors.message = "Message is required";
    return inputErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="container d-flex justify-content-center">
      <div
        className="content"
        
      >
        <h1
          className="text-center mb-4"
          style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "600" }}
        >
          Contact Me
        </h1>
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <div className="mb-4">
            <TextField
              id="filled-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              label="Name"
              variant="filled"
              className={isDarkMode ? "custom-textfield" : "custom-textfield-b"}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="mb-4">
            <TextField
              id="filled-email"
              name="email"
              label="Email"
              variant="filled"
              value={formData.email}
              onChange={handleChange}
              className={isDarkMode ? "custom-textfield" : "custom-textfield-b"}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <TextField
              id="filled-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              label="Subject"
              variant="filled"
              className={isDarkMode ? "custom-textfield" : "custom-textfield-b"}
            />
            {errors.subject && (
              <div className="invalid-feedback">{errors.subject}</div>
            )}
          </div>
          <div className="mb-4">
            <TextField
              id="filled-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              label="Message"
              variant="filled"
              className={isDarkMode ? "custom-textfield" : "custom-textfield-b"}
              multiline
            />
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </div>
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
            <Button type="primary" size="large" style={{ width: "100%" }}>
              Send Message
            </Button>
          </ConfigProvider>
        </form>
      </div>
    </section>
  );
};

export default Contact;
