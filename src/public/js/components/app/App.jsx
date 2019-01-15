const Header = require("../header/Header");
import Route from "react-router-dom/Route";
import Router from "react-router-dom/BrowserRouter";
import React from "react";
const Paths = require("../../config/paths");
const NavigationBar = require("../navigation_bar/NavigationBar");
const Inbox = require("../inbox/Inbox");

module.exports = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="content">
          <NavigationBar />
          <Route path={Paths.root} component={Inbox} />
          <Route path={Paths.inbox} component={Inbox} />
          <Route path={Paths.important} component={Inbox} />
          <Route path={Paths.sentMail} component={Inbox} />
          <Route path={Paths.drafts} component={Inbox} />
          <Route path={Paths.spam} component={Inbox} />
        </div>
      </div>
    </Router>
  )
};

// This is the result of React development after configure the vimrc
//
// There are several ways to do that but I recommend you download/git-clone the config file on github page that I've linked at the end of the article.
//
//Have a great day! Happing vimming and happy new year!
