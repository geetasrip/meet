import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });
  test("render summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });
  test("render location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });
  test("render show details button", () => {
    expect(EventWrapper.find(".show-details")).toHaveLength(1);
  });
  test("render event details when button is clicked", () => {
    EventWrapper.setState({
      collapsed: true
    });
    EventWrapper.find(".show-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });
  test("hide event details when button is clicked", () => {
    EventWrapper.setState({
      collapsed: false
    });
    EventWrapper.find(".hide-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
});
