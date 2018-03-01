import React from "react";
import { RideDetailsReadMode } from "./ride-details-read-mode";
import renderer from "react-test-renderer";
import { i18nMock } from "test/test-utils";

describe("Header", () => {
  it("should render", () => {
    const component = renderer.create(
      <RideDetailsReadMode
        pickup="pickup"
        dropoff="dropoff"
        dateTime="date-time"
        t={i18nMock}
      />
    );
    let readMode = component.toJSON();
    expect(readMode).toMatchSnapshot();
  });
});
