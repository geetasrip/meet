import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Event extends Component {
  constructor() {
    super();

    this.state = {
      collapsed: true
    };
  }
  handleClick = () => {
    console.log("handle click envnt triggered");
    this.setState({
      collapsed: !this.state.collapsed
    });
    console.log("handle click envnt triggered", this.state.collapsed);
  };
  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <h2 className="location">{event.location}</h2>
        <Button
          className={`${collapsed ? "show" : "hide"}-details`}
          onClick={this.handleClick}
        >
          {collapsed ? "Show Details" : "Hide Details"}
        </Button>
      </div>
    );
  }
}
export default Event;
