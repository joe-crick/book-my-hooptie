import React from "react";
import { BookRide } from "./book-ride";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { i18nMock } from "test/test-utils";

describe("Header", () => {
  it("should render", () => {
    expect(shallow(<BookRide t={i18nMock} />));
  });
  xit("should match the snapshot", () => {
    const component = renderer.create(<CarSelection t={i18nMock} />);
    let header = component.toJSON();
    expect(header).toMatchSnapshot();
  });
});
