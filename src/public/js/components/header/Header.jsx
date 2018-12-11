import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";

class Header extends React.Component {
 constructor() {
  super();
  this.onSubmit = this.onSubmit.bind(this);
 }
 onSubmit(event) {
  event.preventDefault();
  alert("You have submitted!");
 }
  render() {
    return (
      <header className="header">
       <span className="header__logo">Fmail</span>
       <form className="header__search-form" onSubmit={this.onSubmit}>
        <Input fullWidth className="header__search-field" />
        <Button type="submit" variant="contained" color="primary">
         <SearchIcon />
        </Button>
       </form>
      </header>
    )
  }
}

module.exports = Header;