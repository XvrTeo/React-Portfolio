// child component of Gallery component handles photo rendering logic
import React from "react";
import Projects from "../../components/Project";

import spiral from "../../assets/img/spiral.jpg";
import brewmap from "../../assets/img/brewmap.gif";
import quiz from "../../assets/img/quiz.gif";
import techblog from "../../assets/img/techblog.gif";
import notetaker from "../../assets/img/notetaker.gif";
import weatherdashboard from "../../assets/img/weatherdashboard.gif";
import workdayscheduler from "../../assets/img/workdayscheduler.gif";
import ecommerce from "../../assets/img/ecommerce.jpg";
import team from "../../assets/img/team.gif";

const Portfolio = (singleProject) => {

  const projectList = [

    {
      title: "Spiral Travel",
      summary: "This is an easy-to-use traveler app where users can share their travel stories and peruse those of others.",
      image: spiral,
      technologies: "Node.js, JavaScript, Express, MySQL, Sequelize, Bcrypt, Pexels API, Heroku",
      deployedLink: "https://spiraltravel.herokuapp.com/",
      github: "https://github.com/siddz415/Spiral-travel",
    },
    {
      title: "Booze Hound",
      summary: "This responsive web application allows users to search for bars in a specified city. Bars that users have previously looked up will be saved in their local storage and displayed in the buttons below the map.",
      image: brewmap,
      technologies: "JavaScript, Open Brewery DB, Leaflet, Materialize CSS",
      deployedLink: "https://jsrra.github.io/Booze-Hound/",
      github: "https://github.com/Jsrra/Booze-Hound",
    },
    {
      title: "Code Quiz",
      summary: "This is a timed coding quiz with multiple-choice questions.",
      image: quiz,
      technologies: "HTML, JavaScript, CSS",
      deployedLink: "https://xvrteo.github.io/Code-Quiz/",
      github: "https://github.com/XvrTeo/Code-Quiz",
    },
    {
      title: "Tech Blog",
      summary: "This is a CMS-style blog that allows users to publish/delete their posts, as well as comment on other users' posts. The application's structure follows the MVC paradigm.",
      image: techblog,
      technologies: "MySQL2, Express, Handlebars, Sequelize, dotenv",
      deployedLink: "https://murmuring-bastion-18331.herokuapp.com/",
      github: "https://github.com/XvrTeo/Tech-Blog",
    },
    {
      title: "Note Taker",
      summary: "This is a note-taking application that uses an Express.js backend and saves and retrieves note data from a JSON file.",
      image: notetaker,
      technologies: "Express.js",
      deployedLink: "https://hidden-beach-83797.herokuapp.com/",
      github: "https://github.com/XvrTeo/Note-Taker",
    },
    {
      title: "Weather Dashboard",
      summary: "This is a dynamic weather dashboard which leverages on the OpenWeather API. The user will be able to enter a specific city into the search field which will display its current weather as well as the 5-day forecast.",
      image: weatherdashboard,
      technologies: "OpenWeather API",
      deployedLink: "https://xvrteo.github.io/weather-dashboard/",
      github: "https://github.com/XvrTeo/weather-dashboard",
    },
    {
      title: "E-commerce Backend",
      summary: "This is a MySQL database and application backend for an e-commerce site.",
      image: ecommerce,
      technologies: "MySQL2, Express, Sequelize, dotenv",
      deployedLink: "https://youtu.be/3RFZH7vc_ro",
      github: "https://github.com/XvrTeo/E-commerce-Back-End",
    },
    {
      title: "Team Profile Generator",
      summary: "This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.",
      image: team,
      technologies: "Node",
      deployedLink: "https://youtu.be/Ymf3Idg4KpY",
      github: "https://github.com/XvrTeo/Team-Profile-Generator",
    },
    {
      title: "Work Day Scheduler",
      summary: "This is a work day planner based on standard business hours where the current date and time are displayed. The timeblocks are color-coded to indicate whether an event is in the past, present or future. The entered schedule is then saved in local storage upon clicking the save button and persists even when the page is refreshed.",
      image: workdayscheduler,
      technologies: "HTML, JavaScript, CSS",
      deployedLink: "https://xvrteo.github.io/Work-Day-Scheduler/",
      github: "https://github.com/XvrTeo/Work-Day-Scheduler",
    }
  ];

  return (
    <div key={singleProject.title}>
      <div className="flex-row">
        {projectList.map((singleProject) => (
          <Projects singleProject={singleProject} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
