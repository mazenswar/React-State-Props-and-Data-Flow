import React, { Component } from "react";

export default class Topbar extends Component {
  state = {
    name: "",
    img_url: "",
    bio: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  internallyHandleSubmit = () =>
    this.setState({ name: "", img_url: "", bio: "" });

  render() {
    return (
      <div className="top-bar">
        <h1 className="top-bar-title">{this.props.name}</h1>
        <h2>Add someone that inspires you!</h2>
        <form
          onSubmit={e => {
            this.props.handleNewPerson(e, this.state);
            this.internallyHandleSubmit();
          }}
        >
          <input
            name="name"
            type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleChange}
          />
          <input
            name="bio"
            type="text"
            value={this.state.bio}
            placeholder="Bio"
            onChange={this.handleChange}
          />
          <input
            name="img_url"
            type="text"
            value={this.state.img_url}
            placeholder="Img Url"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
