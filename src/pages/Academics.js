import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import SRM from "../assets/SRM.jpg";
import Sastra from "../assets/Sastra.jpg";
import Marcina from "../assets/Marcina.jpg";


const academicData = [
  {
    title: "Masters",
    description: "Currently pursuing MCA at SRM University, Kattankulathur (Online Distance Education)",
    image: SRM 
  },
  {
    title: "Bachelor's Degree",
    description: "Completed B.Sc. at SASTRA University with 73%",
    image: Sastra
  },
  {
    title: "12th Grade",
    description: "St. Marcina's Matric Higher Secondary School – 84%",
    image: Marcina
  },
  {
    title: "10th Grade",
    description: "St. Marcina's Matric Higher Secondary School – 80%",
    image: Marcina
  }
];

const Academics = () => {
  return (
    <div className="academics-section">
      <Container className="text-center mt-5">
        <h2 className="mb-3">Academic History</h2>
        <p className="mb-5"><i>
          My academic journey has been a blend of technical and foundational growth.
          I am currently pursuing my Master’s in Computer Applications from SRM University 
          while building upon a strong undergraduate background from SASTRA University. 
          My schooling laid the groundwork that continues to guide my academic and professional pursuits.
        </i></p>
        <Row className="justify-content-center">
          {academicData.map((item, index) => (
            <Col key={index} xs="auto" className="mb-4">
              <Card className="academic-card text-dark">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
  
};

export default Academics;