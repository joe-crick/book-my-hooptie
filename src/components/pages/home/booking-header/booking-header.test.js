import React from "react";
import { BookingHeader } from "./booking-header";
import renderer from "react-test-renderer";
import { i18nMock } from "test/test-utils";

describe("Header", () => {
  it("should render", () => {
    const component = renderer.create(<BookingHeader t={i18nMock} />);
    let header = component.toJSON();
    expect(header).toMatchSnapshot();
  });
});
