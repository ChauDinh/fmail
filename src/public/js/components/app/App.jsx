const Header = require("../header/Header");
import Route from "react-router-dom/Route";
import Router from "react-router-dom/BrowserRouter";
import React from "react";
const Paths = require("../../config/paths");
const NavigationBar = require("../navigation_bar/NavigationBar");

module.exports = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="content">
          <NavigationBar />
          <Route path={Paths.root} />
          <Route path={Paths.inbox} />
          <Route path={Paths.important} />
          <Route path={Paths.sentMail} />
          <Route path={Paths.drafts} />
          <Route path={Paths.spam} />
        </div>
      </div>
    </Router>
  )
}
