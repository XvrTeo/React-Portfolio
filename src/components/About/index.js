import React from "react";
import PortfolioImage from "../../assets/PortfolioImage.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import { SiMysql, SiRedux, SiGraphql } from "react-icons/si";

const About = () => {
  return (
    <div className="container" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="row">
        <div className="col-6">
          <img
            src={PortfolioImage}
            className="my-2"
            style={{ width: "60%" }}
            alt="cover"
          />
        </div>
        <div className="col-6">
          <h1 id="about" style={{ marginBottom: "20px", color: "#333" }}>
            Hi and welcome!
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              color: "#555",
            }}
          >
            Having accumulated years of experience in sales and customer success within the tech, marketing and media
            industries, I recently embarked on an exciting career transition into software development. Currently, I
            am actively participating in UC Berkeley Extension's intensive software development bootcamp, where I
            have
            been refining my skills in Node, MySQL, MongoDB, React, jQuery, REST, and GraphQL. This comprehensive
            program
            has provided me with practical expertise in web development, databases, and a wide range of development
            tools and frameworks.
            <br />
            <br />
            Drawing from my extensive experience in sales and customer success, I have honed invaluable soft skills,
            such as exceptional communication, collaborative prowess, and adept problem-solving abilities. As a
            developer, I leverage these strengths to consistently deliver effective and efficient solutions that
            surpass client expectations. Fueled by a robust drive for continuous learning and growth in the software
            development field, complemented by my distinct skill set and diverse background, I am fully confident in
            my capacity to make valuable contributions to any project or team.
            <br />
          </p>
          <br />
          <br />
          <br />
          <h4 style={{ marginBottom: "20px", color: "#333" }}>
            Technical Skills:
          </h4>
          <div className="d-flex justify-content-start align-items-center flex-wrap">
            <div
              className="skill-icon"
              style={{
                border: "1px solid #333",
                borderRadius: "5px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <FaHtml5 className="tech-icon" />
              <p className="icon-name">HTML5</p>
            </div>
            <div
              className="skill-icon"
              style={{
                border: "1px solid #333",
                borderRadius: "5px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <FaCss3Alt className="tech-icon" />
              <p className="icon-name">CSS3</p>
            </div>
            <div
              className="skill-icon"
              style={{
                border: "1px solid #333",
                borderRadius: "5px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <FaJsSquare className="tech-icon" />
              <p className="icon-name">JavaScript</p>
            </div>
            <div
              className="skill-icon"
              style={{
                border: "1px solid #333",
                borderRadius: "5px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <FaBootstrap className="tech-icon" />
              <p className="icon-name">Bootstrap</p>
            </div>
            <div
              className="skill-icon"
              style={{
                border: "1px solid #333",
                borderRadius: "5px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <FaNode className="tech-icon" />
              <p className="icon-name">Node.js</p>
            </div>
            <div
              className="skill-icon"
              style={{
                border: "1px solid #333",
                borderRadius: "5px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <FaReact className="tech-icon" />
              <p className="icon-name">React</p>
            </div>
            <div
              className="skill-icon"
              style={{
                border: "1px solid #333",
                borderRadius: "5px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <DiJqueryLogo className="tech-icon" />
              <p className="icon-name">jQuery</p>
            </div>
            <div
              className="skill-icon"
              style={{
                border: "1px solid #333",
                borderRadius: "5px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <SiRedux className="tech-icon" />
              <p className="icon-name">Redux</p>
            </div>
            <div
              className="skill-icon"
              style={{
                border: "1px solid #333",
                borderRadius: "5px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <DiMongodb className="tech-icon" />
              <p className="icon-name">MongoDB</p>
            </div>
            <div
              className="skill-icon"
              style={{
                border: "1px solid #333",
                borderRadius: "5px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <SiMysql className="tech-icon" />
              <p className="icon-name">MySQL</p>
            </div>
            <div
              className="skill-icon"
              style={{
                border: "1px solid #333",
                borderRadius: "5px",
                padding: "5px",
                margin: "5px",
              }}
            >
              <SiGraphql className="tech-icon" />
              <p className="icon-name">GraphQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
