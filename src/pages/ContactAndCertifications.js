// ContactAndCertifications.js
import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import certificateImage from "../assets/GEN AI.jpg";

function ContactAndCertifications() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_raoi2jm",     
        "template_pdcf0lm",    
        form.current,
        "IgQWGxsUTS3bv7UF_"     
      )
      .then(
        (result) => {
          setSubmitted(true);
          setError(false);
          form.current.reset();
           setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          setError(true);
          setSubmitted(false);
          console.error(error.text);
           setTimeout(() => setError(false), 5000);
        }
      );
  };

  return (
    <div
      style={{
        backgroundColor: "#14213d",
        color: "white",
        minHeight: "100vh",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <Container>
        {/* Section Title */}
        <Row className="mb-5">
          <Col md={6} className="text-center">
            <h2 className="fw-bold" style={{ fontSize: "2.8rem" }}>
              Contact
            </h2>
          </Col>
          <Col md={6} className="text-center">
            <h2 className="fw-bold" style={{ fontSize: "2.8rem" }}>
              Certificate
            </h2>
          </Col>
        </Row>

        {/* Two Column Layout */}
        <Row className="justify-content-center">
          {/* Contact Form */}
          <Col md={6}>
            <h4 className="fw-bold mb-3">Get in Touch</h4>
            <Form ref={form} onSubmit={sendEmail}>
  <Form.Group className="mb-3" controlId="formName">
    <Form.Label>Your Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your name"
      name="name"
      required
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control
      type="email"
      placeholder="Enter your email"
      name="email"
      required
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control
      as="textarea"
      rows={3}
      placeholder="Type your message here..."
      name="message"
      required
    />
  </Form.Group>

  <input type="hidden" name="title" value="Contact Form Submission" />

  <Button variant="outline-light" type="submit">
    Send Message
  </Button>
</Form>


            {/* Feedback messages */}
            {submitted && (
              <Alert variant="success" className="mt-3">
                Your message has been sent successfully!
              </Alert>
            )}
            {error && (
              <Alert variant="danger" className="mt-3">
                Oops! Something went wrong. Please try again later.
              </Alert>
            )}

            {/* Resume Download */}
            <Row className="justify-content-center mt-4">
              <Col md={12} className="text-center">
                <a
                  href="/Sruthi Gayathri S_2025.pdf"
                  download="Sruthi_Gayathri_Resume.pdf"
                  className="btn btn-outline-light btn-lg"
                >
                  Download My Resume
                </a>
              </Col>
            </Row>
          </Col>

          {/* Certificate Display */}
          <Col md={6}>
            <h4 className="fw-bold mb-3 text-center">My Gen AI Certificate</h4>
            <div className="text-center">
              <img
                src={certificateImage}
                alt="Gen AI Certificate"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactAndCertifications;
