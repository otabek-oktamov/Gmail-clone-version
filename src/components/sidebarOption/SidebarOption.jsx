import React from "react";
import "./SidebarOption.css";

function SidebarOption({ icon, title, number, selected }) {
  return (
    <li className={`sidebarOption ${selected ? 'sidebarOption--active' : 'sidebarOption--unactive'}`}>
      {icon} <h3>{title}</h3> <p>{number}</p>
    </li>
  );
}

export default SidebarOption;
