import React from "react";
import Button from "@material-ui/core/Button";
const NavigationList = require("./NavigationList");

class NavigationBar extends React.Component {
 constructor() {
  super();
  this.onCompose = this.onCompose.bind(this);
 }

 onCompose(event) {
  event.preventDefault();
  alert("You've composed!");
 }

 render() {
  return (
   <aside className="navigation-bar">
    <Button
     className="nagivation-bar__compose-button"
     variant="contained"
     color="secondary"
     onClick={this.onCompose}
    >
     Compose
    </Button>
    <NavigationList />
   </aside>
  );
 }
}

module.exports = NavigationBar;