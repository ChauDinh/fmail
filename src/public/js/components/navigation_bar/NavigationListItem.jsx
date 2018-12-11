import React from "react";
import Link from "react-router-dom/Link";

const NavigationListItem = ({ label, path, isSelected }) => {
 const className = isSelected ? "navigation-bar__li--selected" : "navigation-bar__li";
 return (
  <li className={className}>
   <Link className="navigation-bar__link" to={path}>
    {label}
   </Link>
  </li>
 );
}

module.exports = NavigationListItem;