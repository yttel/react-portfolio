import React from "react";
import projects from "../../data/works.json"
import ProjectCard from "../../components/ProjectCard"; 
import { Container, Row, Col } from "react-bootstrap";

const projectList = projects.map((project) => {
  return (
    <Col>
      <ProjectCard {...project} />
    </Col>
  );
});

const Portfolio = () => {
  return (
    <Container fluid>
      <h1 class="text-center">Portfolio</h1>
      <Row xs={1} sm={2} md={2} lg={3}>
          { projectList }
      </Row>
    </Container>
  );
};

export default Portfolio;