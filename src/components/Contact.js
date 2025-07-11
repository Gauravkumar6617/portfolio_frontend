import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formDetails;

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      toast.error("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number (only digits, 7-15 characters).");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setButtonText("Sending...");
    try {
      const response = await fetch("https://portfolio-backend-f10j.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      const contentType = response.headers.get("content-type");
      if (!response.ok) throw new Error(`Server responded with status ${response.status}`);

      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        setFormDetails(formInitialDetails);

        if (result.success) {
          toast.success("Message sent successfully!");
        } else {
          toast.error(result.error || "Something went wrong, please try again.");
        }
      } else {
        const text = await response.text();
        throw new Error(`Unexpected response: ${text}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.message || "Something went wrong.");
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Let’s Connect</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <ToastContainer position="top-right" autoClose={3000} />
      </Container>
    </section>
  );
};
