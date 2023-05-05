import React from "react";
import { Card } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = ({ singleProject }) => {
  const { title, summary, image, technologies, github, deployedLink } = singleProject;

  return (
    <Card
      style={{ width: "20rem", margin: "20px 50px 20px 10px", backgroundColor: "#EAF4D3" }}
      key={title}
      className="col-3"
    >
      <Card.Title style={{ margin: "15px", fontSize: "27px", color: "#094067" }}>
        {title}
      </Card.Title>
      <Card.Text className="mb-2 text-muted" style={{ fontSize: "15px", margin: "20px 0px 20px 10px" }}>
        {summary}
      </Card.Text>
      <Card.Img variant="top" src={image} alt={title} style={{ position: "relative" }} />
      <Card.Body style={{ backgroundColor: "#EAF4D3" }}>
        <Card.Text style={{ fontSize: "17px" }} className="text-muted">
          {"Built with: "}
          <Card.Text style={{ fontSize: "15px" }} className="text-muted">{technologies}</Card.Text>
        </Card.Text>
      </Card.Body>
      <Card.Footer
        style={{ backgroundColor: "#EAF4D3", padding: "5px 20px 5px 20px" }}
      >
        <a href={github} target="_blank" rel="noopener noreferrer" className="card-text" alt="GitHub">
          <FaGithub style={{ fontSize: "30px" }} />
        </a>
        <a
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card-text"
          alt="Deployed Link"
        >
          <FaExternalLinkAlt style={{ fontSize: "25px" }} />
        </a>
      </Card.Footer>
    </Card>
  );
};

export default Projects;
