import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function About() {
  return (
    <div style={{ backgroundColor: "#14213d", color: "white", minHeight: "100vh", paddingTop: "60px" }}>
      {/* LinkedIn Button (Top Right, Outside Container) */}
      <div style={{ position: "absolute", top: "100px", right: "20px" }}>
        <Button
          variant="outline-light"
          href="https://www.linkedin.com/in/sruthi-gayathri-s-6b990327a"
          target="_blank"
        >
          View My LinkedIn Profile
        </Button>
      </div>

      <Container>
        {/* Row for About Me */}
        <Row className="align-items-center">
          <Col md={12} className="text-center mb-4">
            <h2 className="fw-bold animate__animated animate__fadeInDown" style={{ fontSize: "3rem" }}>
              About Me
            </h2>
            <p className="lead animate__animated animate__fadeInUp animate__delay-1s" style={{ maxWidth: "800px", margin: "0 auto" }}>
              👋 I’m <strong>Sruthi Gayathri</strong>, a passionate developer transitioning from .NET to the world of AI and Machine Learning.
              I love building clean, responsive web apps and solving real-world problems through technology.
            </p>
          </Col>
        </Row>

        {/* Info Cards */}
        <Row className="mt-5 g-4 text-start justify-content-center">
          <Col md={5}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">👩‍💻 Who I Am</Card.Title>
                <Card.Text>
                  Sruthi Gayathri – Full Stack Developer & AI/ML Learner with real-world experience in .NET development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={5}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">🛠 What I Do</Card.Title>
                <Card.Text>
                  I create web apps with React.js, C#, Bootstrap, and PostgreSQL. I also developed SSRS reports for live projects.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={5}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">📈 My Journey</Card.Title>
                <Card.Text>
                  From building travel web apps to designing a quantum computing site and now diving into AI & ML.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={5}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">🚀 Skills & Achievements</Card.Title>
                <Card.Text>
                  React, HTML/CSS, C#, PostgreSQL, Bootstrap, SSRS, Agile, Collaboration, AI & ML foundations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
