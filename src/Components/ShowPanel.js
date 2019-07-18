import React from "react";

const ShowPanel = props => {
  const { personObj } = props;
  const renderBio = () => {
    if (Object.keys(personObj).length > 0) {
      const bio = personObj.bio.split("BREAK");
      return bio.map((para, i) => <p key={i}>{para}</p>);
    }
  };

  return props.personObj.id ? (
    <div id="show-panel">
      <button
        onClick={() => props.handleDeletePerson(props.personObj.id)}
        className="delete-button"
      >
        {" "}
        Delete{" "}
      </button>
      <img
        className="show-image"
        src={personObj.img_url}
        alt={personObj.name}
      />
      <h1>{personObj.name}</h1>
      {renderBio()}
    </div>
  ) : (
    <div id="show-panel"></div>
  );
};

export default ShowPanel;
