import React from "react";
import { shallow, mount } from "enzyme";
import { i18nMock } from "test/test-utils";
import { RideDetails } from "./ride-details";
import TempFunction from "utils/temp-function";

describe("RideDetails", () => {
  it("should render", () => {
    const actual = shallow(
      <RideDetails pickup="test" dropoff="test" dateTime="test" t={i18nMock} />
    );
    expect(actual).toBeDefined();
  });
  xit("should toggle edit mode", () => {
    const app = mount(
      <RideDetails
        pickup="pickup"
        pickupDate="pickupdate"
        dropoff="dropoff"
        updatePickup={TempFunction}
        updateDate={TempFunction}
        updateDropoff={TempFunction}
        setTime={TempFunction}
        time="time"
        t={i18nMock}
      />
    );
  });
});
