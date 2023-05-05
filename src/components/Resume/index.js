import React from "react";
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNode,
  FaReact,
  FaNpm,
  FaUniversity,
  FaCode
} from "react-icons/fa";
import {
  DiJqueryLogo,
  DiMongodb
} from "react-icons/di";
import {
  SiMysql,
  SiHeroku,
  SiWebpack,
  SiRedux,
  SiReactrouter,
  SiGraphql
} from "react-icons/si";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import DevResume from "../../assets/DevResume.pdf";

function Proficiencies() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Proficiencies</h1>
      <Row>
        <Col xs={12} md={4} className="mb-4">
          <h3><FaGithub /> Tools:</h3>
          <ul className="list-unstyled">
            <li><FaGitAlt /> Git</li>
            <li><SiHeroku /> Heroku</li>
            <li><SiWebpack /> Webpack</li>
            <li><FaCode /> Harness</li>
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
          <h3><FaHtml5 /> Front-end:</h3>
          <ul className="list-unstyled">
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3Alt /> CSS</li>
            <li><FaJsSquare /> JavaScript</li>
            <li><DiJqueryLogo /> jQuery</li>
            <li><FaCode /> Responsive design</li>
            <li><FaReact /> React <SiReactrouter /> <SiRedux /></li>
            <li><FaBootstrap /> Bootstrap</li>
          </ul>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <h3><FaNode /> Back-end:</h3>
          <ul className="list-unstyled">
            <li><FaCode /> APIs</li>
            <li><FaNode /> Node <FaNpm /></li>
            <li><FaCode /> Express</li>
            <li><SiMysql /> MySQL, Sequelize</li>
            <li><DiMongodb /> MongoDB, Mongoose</li>
            <li><FaCode /> REST</li>
            <li><SiGraphql /> GraphQL</li>
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
      <div className="fixed-bottom text-end pe-3 pb
-3">
        <a href="https://sbr.com.sg/media-marketing/commentary/untapping-social-media-potential" target="_blank" rel="noreferrer">"Untapping the social media potential" in the Singapore Business Review</a>
      </div>
    </>
  );
}

export default Resume;
