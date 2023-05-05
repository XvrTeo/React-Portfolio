import React from "react";
import { FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaNode, FaReact, FaNpm } from "react-icons/fa";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import { SiMysql, SiHeroku, SiWebpack, SiRedux, SiReactrouter, SiGraphql } from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";
import DevResume from "../../assets/DevResume.pdf";

function Resume() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Proficiencies</h1>

      <Row>
        <Col xs={12} md={4} className="mb-4">
          <h3><FaGithub /> Tools:</h3>
          <ul className="list-unstyled">
            <li>
              <FaGitAlt /> Git
            </li>
            <li>
              <SiHeroku /> Heroku
            </li>
            <li>
              <SiWebpack /> Webpack
            </li>
          </ul>
          <a href={DevResume} target="_blank" rel="noreferrer" className="btn btn-primary">
            View Resume
          </a>
        </Col>

        <Col xs={12} md={4} className="mb-4">
          <h3><FaHtml5 /> Front-end:</h3>
          <ul className="list-unstyled">
            <li>
              <FaHtml5 /> HTML
            </li>
            <li>
              <FaCss3Alt /> CSS
            </li>
            <li>
              <FaJsSquare /> JavaScript
            </li>
            <li>
              <DiJqueryLogo /> jQuery
            </li>
            <li>Responsive design</li>
            <li>
              <FaReact /> React <SiReactrouter /> <SiRedux />
            </li>
            <li>
              <FaBootstrap /> Bootstrap
            </li>
          </ul>
        </Col>

        <Col xs={12} md={4} className="mb-4">
          <h3><FaNode /> Back-end:</h3>
          <ul className="list-unstyled">
            <li>APIs</li>
            <li>
              <FaNode /> Node <FaNpm />
            </li>
            <li>Express</li>
            <li>
              <SiMysql /> MySQL, Sequelize
            </li>
            <li>
              <DiMongodb /> MongoDB, Mongoose
            </li>
            <li>REST</li>
            <li>
              <SiGraphql /> GraphQL
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
