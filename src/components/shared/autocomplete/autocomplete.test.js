import React from "react";
import { shallow } from "enzyme";
import Autocomplete from "./autocomplete";

describe("Autocomplete", () => {
  it("should render", () => {
    const actual = shallow(<Autocomplete />);
    expect(actual).toBeDefined();
  });
  it("should display results when search results are found", () => {});
  xit("should display No-Results message when results are not found", () => {});
  xit("should update the field when an option is selected", () => {});
  xit("should clear the options when the user clicks esc", () => {});
  xit("should clear the options when the user clicks outside the input", () => {});
});
