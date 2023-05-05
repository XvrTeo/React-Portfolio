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
            As a seasoned professional with years of experience in sales and
            customer success within the tech and marketing industries, I've now
            decided to pursue an exciting career in software development.
            <br />
            <br />
            I am currently in an intensive software development bootcamp and
            have honed my skills in programming languages such as Node, MySQL,
            MongoDB, React, jQuery, REST, and GraphQL. Additionally, I gained
            hands-on experience in web development, databases, and various
            development tools and frameworks.
            <br />
            <br />
            My prior experience in sales and customer success has instilled in
            me valuable soft skills such as effective communication,
            collaboration, and problem-solving. As a developer, I'm able to
            leverage these skills to create effective and efficient solutions
            that exceed client expectations. I'm eager to continue learning and
            growing in the field of software development, and I'm confident that
            my unique skill set and diverse experience will enable me to make
            meaningful contributions to any project or team.
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
