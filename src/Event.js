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
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <h2 className="location">{event.location}</h2>
        <p className="start-date">
          {event.start.dateTime} ({event.start.timeZone})
        </p>
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
