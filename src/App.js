import { React, Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  };

  componentDidMount() {
    getEvents().then(events => {
      this.setState({
        events: events.slice(0, this.state.numberOfEvents),
        locations: extractLocations(events)
      });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  updateNumberofEvents = newNumberOfEvents => {
    this.setState({
      numberOfEvents: newNumberOfEvents
    });
    this.updateEvents(this.state.currentLocation);
  };

  updateEvents = location => {
    getEvents().then(events => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter(event => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
        currentLocation: location
      });
    });
  };

  render() {
    const { numberOfEvents } = this.state;

    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          updateNumberofEvents={this.updateNumberofEvents}
          numberOfEvents={numberOfEvents}
        />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );
  }
}

export default App;
