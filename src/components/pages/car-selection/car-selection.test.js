import React from "react";
import { CarSelection } from "./car-selection";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { i18nMock } from "test/test-utils";

describe("Header", () => {
  it("should render", () => {
    const cars = [];
    const getCars = jest.fn();
    expect(shallow(<CarSelection t={i18nMock} cars={cars} getCars={getCars} />));
  });
  xit("should match the snapshot", () => {
    const component = renderer.create(<CarSelection t={i18nMock} />);
    let header = component.toJSON();
    expect(header).toMatchSnapshot();
  });
});
