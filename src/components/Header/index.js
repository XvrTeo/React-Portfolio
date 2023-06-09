import React from "react";
import Nav from "../Navigation";

function Header(props) {
  return (
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <h2>
        <a href="./" style={{ fontSize: "50px", margin: "20px" }}>
          Xavier Teo
        </a>
      </h2>
      <Nav
        categories={props.categories}
        page={props.page}
        setPage={props.setPage}
      />
    </header>
  );
}

export default Header;
