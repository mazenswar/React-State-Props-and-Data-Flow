import React, { Component, Fragment } from "react";
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import ShowPanel from "./Components/ShowPanel";
import "./Stylesheets/style.scss";

const PEOPLE_URL = "http://localhost:4000/people";

export default class App extends Component {
  state = {
    people: [],
    showPerson: {}
  };

  componentDidMount() {
    fetch(PEOPLE_URL)
      .then(r => r.json())
      .then(peopleArr => this.setState({ people: peopleArr }));
  }

  handleShowPerson = name => {
    const personObj = this.state.people.find(person => person.name === name);
    this.setState({
      ...this.state,
      showPerson: personObj
    });
  };

  handleNewPerson = (e, data) => {
    e.preventDefault();
    fetch(PEOPLE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(newPerson =>
        this.setState({
          people: [...this.state.people, newPerson],
          showPerson: newPerson
        })
      );
  };

  handleDeletePerson = id => {
    fetch(`${PEOPLE_URL}/${id}`, {
      method: "DELETE"
    }).then(r => {
      const newPeople = this.state.people.filter(p => p.id !== id);
      this.setState({
        people: newPeople,
        showPerson: ""
      });
    });
  };

  render() {
    const names = this.state.people.map(person => person.name);
    return (
      <Fragment>
        <Topbar
          name={this.state.showPerson.name}
          handleNewPerson={this.handleNewPerson}
        />
        <Sidebar people={names} handleShowPerson={this.handleShowPerson} />
        <ShowPanel
          personObj={this.state.showPerson}
          handleDeletePerson={this.handleDeletePerson}
        />
      </Fragment>
    );
  }
}
