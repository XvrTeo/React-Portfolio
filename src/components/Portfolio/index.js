// child component of Gallery component handles photo rendering logic
import React from "react";
import Projects from "../../components/Project";

import spiral from "../../assets/img/spiral.jpg";
import brewmap from "../../assets/img/brewmap.gif";
import quiz from "../../assets/img/quiz.gif";
import techblog from "../../assets/img/techblog.gif";
import notetaker from "../../assets/img/notetaker.gif";
import weatherdashboard from "../../assets/img/weatherdashboard.gif";
import workdayscheduler from "../../assets/img/workdayscheduler.jpg";

const Portfolio = (singleProject) => {

  const projectList = [

    {
      title: "Spiral Travel",
      summary: "This is an easy-to-use traveler app, you can share your own travel stories and peruse those of others.",
      image: spiral,
      github: "https://github.com/siddz415/Spiral-travel",
    },
    {
      title: "Booze Hound",
      summary: "This responsive web application allows users to search for bars in a specified city. Bars that users have previously looked up will be saved in their local storage and displayed in the buttons below the map.",
      image: brewmap,
      github: "https://github.com/Jsrra/Booze-Hound",
    },
    {
      title: "Code Quiz",
      summary: "This is a timed coding quiz with multiple-choice questions. The application will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.",
      image: quiz,
      github: "https://github.com/XvrTeo/Code-Quiz",
    },
    {
      title: "Tech Blog",
      summary: "This is a CMS-style blog that allows users to publish/delete their posts, as well as comment on other users' posts. The application's structure follows the MVC paradigm and the technologies used are MySQL2, Express, Handlebars, Sequelize and dotenv.",
      image: techblog,
      github: "https://github.com/XvrTeo/Tech-Blog",
    },
    {
      title: "Note Taker",
      summary: "This is a note-taking application that uses an Express.js backend and saves and retrieves note data from a JSON file.",
      image: notetaker,
      github: "https://github.com/XvrTeo/Note-Taker",
    },
    {
      title: "Weather Dashboard",
      summary: "This is a dynamic weather dashboard which leverages on the OpenWeather API. The user will be able to enter a specific city into the search field which will display its current weather as well as the 5-day forecast.",
      image: weatherdashboard,
      github: "https://github.com/XvrTeo/weather-dashboard",
    },
    {
      title: "Work Day Scheduler",
      summary: "This is a work day planner based on standard business hours where the current date and time are displayed. The timeblocks are color-coded to indicate whether an event is in the past, present or future. The entered schedule is then saved in local storage upon clicking the save button and persists even when the page is refreshed.",
      image: workdayscheduler,
      github: "https://github.com/XvrTeo/Work-Day-Scheduler",
    },
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
