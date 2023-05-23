import React from "react";
import { FaCode, FaUniversity } from "react-icons/fa";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import { SiMysql, SiHeroku, SiWebpack, SiRedux, SiReactrouter, SiGraphql } from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";
import DevResume from "../../assets/DevResume.pdf";

const toolIcons = [
  { icon: FaGitAlt, text: "Git" },
  { icon: SiHeroku, text: "Heroku" },
  { icon: SiWebpack, text: "Webpack" },
  { icon: FaCode, text: "Harness" },
];

const frontEndIcons = [
  { icon: FaHtml5, text: "HTML" },
  { icon: FaCss3Alt, text: "CSS" },
  { icon: FaJsSquare, text: "JavaScript" },
  { icon: DiJqueryLogo, text: "jQuery" },
  { icon: FaCode, text: "Responsive design" },
  { icon: FaReact, text: "React" },
  { icon: SiReactrouter, text: "React Router" },
  { icon: SiRedux, text: "Redux" },
  { icon: FaBootstrap, text: "Bootstrap" },
];

const backEndIcons = [
  { icon: FaCode, text: "APIs" },
  { icon: FaNode, text: "Node" },
  { icon: FaCode, text: "Express" },
  { icon: SiMysql, text: "MySQL, Sequelize" },
  { icon: DiMongodb, text: "MongoDB, Mongoose" },
  { icon: FaCode, text: "REST" },
  { icon: SiGraphql, text: "GraphQL" },
];

function Proficiencies() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Proficiencies</h1>
      <Row>
        <Col xs={12} md={4} className="mb-4">
          <h3>Tools:</h3>
          <ul className="list-unstyled">
            {toolIcons.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon /> {text}
              </li>
            ))}
          </ul>
          <a
            href={DevResume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View Resume
          </a>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <h3>Front-end:</h3>
          <ul className="list-unstyled">
            {frontEndIcons.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon /> {text}
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <h3>Back-end:</h3>
          <ul className="list-unstyled">
            {backEndIcons.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon /> {text}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

function Education() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Education</h1>
      <Row>
        <Col xs={12} md={4} className="mb-4">
          <ul className="list-unstyled">
            <li>
              <FaUniversity /> Bachelor of Arts in Mass Communications, University of California, Berkeley
            </li>
            <li>
              <FaCode />{"\n"}
              Full Stack Coding Bootcamp, UC Berkeley Extension, May 2023
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

function Resume() {
  return (
    <>
      <Proficiencies />
      <Education />
      <div className="fixed-bottom text-end pe-3 pb-3">
        <a href="https://sbr.com.sg/media-marketing/commentary/untapping-social-media-potential" target="_blank" rel="noreferrer">
          "Untapping the social media potential" in the Singapore Business Review
        </a>
      </div>
    </>
  );
}

export default Resume;
