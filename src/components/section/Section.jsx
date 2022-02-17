import React from "react";
import "./Section.css";
function Section({ color, title, icon, selected }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
      className={`section ${selected && "section--selected"}`}
    >
      {icon}
     <h4> {title}</h4>
    </div>
  );
}

export default Section;
