import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ name, description, screenshot, githubUrl, deployedUrl }) => {
  return (
    <>
      {/* <h3>PROJECT CARD</h3> */}
      <Card className="text-center mb-3">
        <Card.Header>
          <Card.Title>{name}</Card.Title>
        </Card.Header>
        <Card.Img className="border" variant="top" src={screenshot} fluid/>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <a class="btn mr-2 border"  href={githubUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
          {
            deployedUrl && <a class="btn border" href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed</a>
          }
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectCard;