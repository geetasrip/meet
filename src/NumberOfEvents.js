import React, { Component } from "react";

import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: ""
  };
  handleInputChanged = event => {
    const value = event.target.value;

    if (value < 1 || value > 32) {
      console.log("inside iff", value);
      this.setState({
        numberOfEvents: "",
        errorText: "Number of Events must be a non-negative integer"
      });
    } else {
      console.log("inside elseee", value);
      this.setState({
        numberOfEvents: value,
        errorText: ""
      });
    }
  };

  RemoveNonNumeric = text => {
    return text.replace(/[^0-9]/g, "");
  };

  render() {
    return (
      <div>
        <div>
          <p>
            <b>Number of Events:</b>
          </p>
          <input
            type="number"
            name="number"
            className="number-of-events"
            value={this.state.numberOfEvents}
            onChange={e => this.handleInputChanged(e)}
          />
        </div>
        <div>
          <ErrorAlert text={this.state.errorText} />
        </div>
      </div>
    );
  }
}
export default NumberOfEvents;
