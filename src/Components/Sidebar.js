import React from "react";

const Sidebar = props => {
  const generateSidebarLis = () => {
    return props.people.map(person => (
      <li
        onClick={() => props.handleShowPerson(person)}
        key={person}
        className="sidebar-li"
      >
        {" "}
        {person}{" "}
      </li>
    ));
  };
  console.log(props);

  return <ul className="sidebar-ul">{generateSidebarLis()}</ul>;
};

export default Sidebar;
