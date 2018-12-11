const Header = require("../header/Header");
import Route from "react-router-dom/Route";
import Router from "react-router-dom/BrowserRouter";
import React from "react";
const Paths = require("../../config/paths");

module.exports = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  )
}
