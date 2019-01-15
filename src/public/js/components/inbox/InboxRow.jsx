import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Link from "react-router-dom/Link";
const InboxRowIcons = require("./InboxRowIcons");
const Paths = require("../../config/paths");

const InboxRow = ({ email }) => {
 const className = email.viewedAt ? "inbox__table-row--viewed" : "inbox__table-row";

 return (
  <TableRow className={className}>
   <TableCell className="inbox__table-cell">
    <InboxRowIcons isImportant={email.isImportant} emailId={email.id} />
   </TableCell>
   <TableCell className="inbox__table-cell--bold">
    <Link className="link inbox__link" to={Paths.email(email.id)}>
     {email.subject}
    </Link>
   </TableCell>
   <TableCell className="inbox__table-cell">
    <Link className="link inbox__link" to={Paths.email(email.id)}>
     {email.body}
    </Link>
   </TableCell>
   <TableCell className="inbox__table-cell-bold">
    <Link className="link inbox__link" to={Paths.email(email.id)}>
     {email.timestamp}
    </Link>
   </TableCell>
  </TableRow>
 );
};

module.exports = InboxRow;

// This is the mock text that I use to test the typing challenge of my mechanical keyboard from AULA, Chinese. 
//
// This is actually the first mechanical keyboard of mine. 
//
// I'm very keen on typing on a mechanical keyboard but my budget is limited so I decided to try on Chinese brand and AULA is my choice!
//
// After using it 2, 3 weeks, I released that the built quality of this keyboard is awesome. In particular, it has 2 layout...
//
//
//
// 
