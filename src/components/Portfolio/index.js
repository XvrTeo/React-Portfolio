import React from "react";
import Project from "../../components/Project";
import spiral from "../../assets/img/spiral.jpg";
import brewmap from "../../assets/img/brewmap.gif";
import quiz from "../../assets/img/quiz.gif";
import techblog from "../../assets/img/techblog.gif";
import notetaker from "../../assets/img/notetaker.gif";
import weatherdashboard from "../../assets/img/weatherdashboard.gif";
import workdayscheduler from "../../assets/img/workdayscheduler.gif";
import ecommerce from "../../assets/img/ecommerce.jpg";
import team from "../../assets/img/team.gif";

const projectList = [
  {
    title: "Spiral Travel",
    summary: "Spiral Travel is a user-friendly application that allows travelers to share their experiences and explore those of others. With its intuitive interface and seamless integration with the Pexels API, users can easily create and publish engaging travel stories.",
    image: spiral,
    technologies: "Node.js, JavaScript, Express, MySQL, Sequelize, Bcrypt, Pexels API, Heroku",
    deployedLink: "https://spiraltravel.herokuapp.com/",
    github: "https://github.com/siddz415/Spiral-travel",
  },
  {
    title: "Booze Hound",
    summary: "Booze Hound is a responsive web application that enables users to search for bars in a specific city. The application includes a feature that automatically saves the bars that the user previously looked up in their local storage. These saved bars are then displayed in buttons located below the map for easy access in the future.",
    image: brewmap,
    technologies: "JavaScript, Open Brewery DB, Leaflet, Materialize CSS",
    deployedLink: "https://jsrra.github.io/Booze-Hound/",
    github: "https://github.com/Jsrra/Booze-Hound",
  },
  {
    title: "Code Quiz",
    summary: "This is an application that enables users to participate in a timed coding quiz featuring a series of multiple-choice questions, and is a valuable resource for those looking to improve their coding skills.",
    image: quiz,
    technologies: "HTML, JavaScript, CSS",
    deployedLink: "https://xvrteo.github.io/Code-Quiz/",
    github: "https://github.com/XvrTeo/Code-Quiz",
  },
  {
    title: "Tech Blog",
    summary: "This is a content management system (CMS) style blog application designed to provide users with an intuitive platform to publish and delete their posts, as well as interact with other users through comments on their posts. Built on the Model-View-Controller (MVC) paradigm, the application's architecture is designed to promote modularity and extensibility.",
    image: techblog,
    technologies: "MySQL2, Express, Handlebars, Sequelize, dotenv",
    deployedLink: "https://murmuring-bastion-18331.herokuapp.com/",
    github: "https://github.com/XvrTeo/Tech-Blog",
  },
  {
    title: "Note Taker",
    summary: "This is a note-taking application that utilizes an Express.js backend to provide users with a seamless and efficient note-taking experience. This application is designed to enable users to save and retrieve their note data using a JSON file, providing a reliable and secure storage solution.",
    image: notetaker,
    technologies: "Express.js",
    deployedLink: "https://hidden-beach-83797.herokuapp.com/",
    github: "https://github.com/XvrTeo/Note-Taker",
  },
  {
    title: "Weather Dashboard",
    summary: "This is a dynamic weather dashboard application that leverages the power of the OpenWeather API to provide users with up-to-date weather information. With an intuitive user interface, users can easily enter a specific city into the search field to view its current weather conditions and 5-day forecast.",
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
    summary:
      "This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.",
    image: team,
    technologies: "Node",
    deployedLink: "https://youtu.be/Ymf3Idg4KpY",
    github: "https://github.com/XvrTeo/Team-Profile-Generator",
  },
  {
    title: "Work Day Scheduler",
    summary:
      "This is a work day planner based on standard business hours where the current date and time are displayed. The timeblocks are color-coded to indicate whether an event is in the past, present or future. The entered schedule is then saved in local storage upon clicking the save button and persists even when the page is refreshed.",
    image: workdayscheduler,
    technologies: "HTML, JavaScript, CSS",
    deployedLink: "https://xvrteo.github.io/Work-Day-Scheduler/",
    github: "https://github.com/XvrTeo/Work-Day-Scheduler",
  },
];

const Portfolio = () => {
  return (
    <div>
      <div className="flex-row">
        {projectList.map((project) => (
          <Project key={project.title} singleProject={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
