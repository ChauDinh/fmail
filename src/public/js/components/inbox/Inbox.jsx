import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
const InboxEmail = require("./InboxEmail");
const InboxRow = require("./InboxRow");
const timestampSort = require("./timestampSort");

class Inbox extends React.Component {
 
 constructor() {
  super();
  this.state = { emails: [] };
 }

 async componentWillMount() {
  const response = await fetch("/emails");
  const json = await response.json();
  const sortedEmails = json.sort(timestampSort);
  const emails = sortedEmails.map(incomingEmail => InboxEmail(incomingEmail));
  this.setState({ emails });
 }
 
 render() {
  return(
   <Table>
    <TableBody>
     {this.state.emails.map(email => (
      <InboxRow key={email.id} email={email} />
     ))}
    </TableBody>
   </Table>
  );
 }
}

module.exports = Inbox;