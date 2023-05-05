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

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={PortfolioImage}
            className="my-2"
            style={{ width: "60%" }}
            alt="cover"
          ></img>
        </div>
        <div className="col-6">
          <h1 id="about">Hi and welcome!</h1>
          <h6 style={{ width: "80%", justifyContent: "center" }} id="about">
            As a seasoned professional with years of experience in sales and customer success within the tech and marketing industries, I've now decided to pursue an exciting career in software development.
            <br></br><br></br>
            I am currently in an intensive software development bootcamp and have honed my skills in programming languages such as Node, MySQL, MongoDB, React, jQuery, REST, and GraphQL. Additionally, I gained hands-on experience in web development, databases, and various development tools and frameworks.

            <br></br><br></br>
            My prior experience in sales and customer success has instilled in me valuable soft skills such as effective communication, collaboration, and problem-solving. As a developer, I'm able to leverage these skills to create effective and efficient solutions that exceed client expectations. I'm eager to continue learning and growing in the field of software development, and I'm confident that my unique skill set and diverse experience will enable me to make meaningful contributions to any project or team.
            <br></br>

          </h6>
          <br></br>
          <br></br>
          <br></br>
          <h4>Technical Skills:</h4>
          <h2>
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
            <DiJqueryLogo />
            <FaReact />
            <SiRedux />
            <FaBootstrap />
            <FaNode />
            <SiMysql />
            <DiMongodb />
            <SiGraphql />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
