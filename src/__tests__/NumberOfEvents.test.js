import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render text input --  NumberOfEvents", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test("render text input correctly from prop --  NumberOfEvents", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number-of-events").prop("value")).toBe(
      numberOfEvents
    );
  });
  test("render change state when text input changes --  NumberOfEvents", () => {
    const numberOfEventObject = { target: { value: "5" } };
    NumberOfEventsWrapper.find(".number-of-events").simulate(
      "change",
      numberOfEventObject
    );
  });
});
