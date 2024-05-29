import React, { useState, useRef } from "react";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider, Alert } from "antd";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";

const colors1 = ["#6253E1", "#04BEFE"];

const Contact = ({ isDarkMode }) => {
  const form = useRef();
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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the current field
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
      emailjs
        .sendForm("service_l4e3m1w", "template_3ootctl", form.current, {
          publicKey: "ixTtmHsyZ-fSqR4W4",
        })
        .then(
          (result) => {
            setFormSubmitted(true);
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
            setFormSubmitted(true);

            setTimeout(() => setFormSubmitted(false), 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <section className="container d-flex justify-content-center">
        <div className="content">
          <h1
            className="text-center mb-4"
            style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "600" }}
          >
            Contact Me
          </h1>
          {formSubmitted && (
            <Alert
              message="Message sent successfully!"
              type="success"
              showIcon
              style={{ marginBottom: "2rem" }}
            />
          )}
          <form style={{ width: "100%" }} ref={form} onSubmit={handleSubmit}>
            <div className="mb-4">
              <TextField
                id="filled-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                label="Name"
                variant="filled"
                error={!!errors.name}
                helperText={errors.name}
                className={
                  isDarkMode ? "custom-textfield" : "custom-textfield-b"
                }
              />
            </div>
            <div className="mb-4">
              <TextField
                id="filled-email"
                name="email"
                label="Email"
                variant="filled"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                className={
                  isDarkMode ? "custom-textfield" : "custom-textfield-b"
                }
              />
            </div>
            <div className="mb-4">
              <TextField
                id="filled-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                label="Subject"
                variant="filled"
                error={!!errors.subject}
                helperText={errors.subject}
                className={
                  isDarkMode ? "custom-textfield" : "custom-textfield-b"
                }
              />
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
                error={!!errors.message}
                helperText={errors.message}
                className={
                  isDarkMode ? "custom-textfield" : "custom-textfield-b"
                }
                multiline
              />
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
              <Button
                type="primary"
                size="large"
                style={{ width: "100%" }}
                htmlType="submit"
              >
                Send Message
              </Button>
            </ConfigProvider>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
