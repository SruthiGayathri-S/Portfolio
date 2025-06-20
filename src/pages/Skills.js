import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaTools, FaBrain } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { SiJira } from "react-icons/si";
import { MdPsychologyAlt } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";

const skillsData = [
  {
    title: "Concepts",
    icon: <MdPsychologyAlt size={60} color="#007bff" />,
    description: "OOPS",
  },
  {
    title: "Web Technologies",
    icon: (
      <div className="d-flex justify-content-center align-items-center gap-3">
        <FaHtml5 size={40} color="#e34c26" />
        <FaCss3Alt size={40} color="#264de4" />
      </div>
    ),
    description: "HTML and CSS",
  },
  {
    title: "Language",
    icon: <FaReact size={60} color="#61dafb" />,
    description: "C#",
  },
  {
    title: "Library",
    icon: <FaReact size={60} color="#61dafb" />,
    description: "React.js",
  },
  {
    title: "CSS Framework",
    icon: <FaBootstrap size={60} color="#7952b3" />,
    description: "Bootstrap",
  },
  {
    title: "Database",
    icon: (
      <div className="d-flex justify-content-center align-items-center gap-3">
        <TbSql size={40} color="#336791" />
        <BiLogoPostgresql size={40} color="#336791" />
      </div>
    ),
    description: "SQL and PostgreSQL",
  },
  {
    title: "Tools",
    icon: (
      <div className="d-flex justify-content-center align-items-center gap-3">
        <SiJira size={40} color="#0052CC" />
        <FaTools size={40} color="#6c757d" />
      </div>
    ),
    description: "JIRA and Click-Up",
  },
  {
    title: "Learning",
    icon: <FaBrain size={60} color="#17a2b8" />,
    description: "AI and ML",
  },
  {
    title: "Soft Skills",
    icon: <GiTeamIdea size={60} color="#20c997" />,
    description: "Team Collaboration, Agile Methodology, Adaptability",
  },
];

function Skills() {
  return (
    <div style={{ backgroundColor: "#14213d", color: "white", padding: "40px 0", minHeight: "100vh" }}>
      <h2 className="text-center mb-5">My Go-To Skills</h2>
      <p className="text-center mb-5 px-3"><i>
          I possess a diverse skill set covering core concepts, modern web technologies, languages, frameworks,
          databases, and tools. I'm continuously learning and evolving with AI & ML while demonstrating strong soft skills
          like collaboration and adaptability.
          </i></p>
      <Container>
        <Row className="g-4">
          {skillsData.map((skill, index) => (
            <Col md={4} sm={6} xs={12} key={index}>
              <Card className="h-100 text-center">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <div className="mb-3">{skill.icon}</div>
                  <Card.Title>{skill.title}</Card.Title>
                  <Card.Text>{skill.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
