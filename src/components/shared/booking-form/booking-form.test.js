import React from "react";
import { shallow, mount } from "enzyme";
import { BookingForm } from "./booking-form";
import { i18nMock } from "test/test-utils";

describe("Booking Form", () => {
  it("should render", () => {
    const actual = shallow(<BookingForm t={i18nMock} />);
    expect(actual).toBeDefined();
  });
});
