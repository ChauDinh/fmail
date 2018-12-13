import React from "react";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

class InboxRowIcons extends React.Component {

 constructor() {
  super();
  this.onClick = this.onClick.bind(this);
 }

 onClick() {
  alert(`Set ${this.props.emailId} to important`);
 }

 render() {
  return (
   <div>
    <IconButton onClick={this.onClick}>
     {this.props.isImportant ? <StarIcon className="inbox__star"/> : <StarBorderIcon />}
    </IconButton>
   </div>
  );
 }
}

module.exports = InboxRowIcons;