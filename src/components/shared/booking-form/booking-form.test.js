import React from "react";
import { shallow, mount } from "enzyme";
import { BookingForm } from "./booking-form";
import { i18nMock } from "test/test-utils";

describe("Booking Form", () => {
  it("should render", () => {
    const actual = shallow(<BookingForm t={i18nMock} />);
    expect(actual).toBeDefined();
  });
  it("should run the passed in function when book now is clicked", () => {
    const expected = 1;
    const mock = jest.fn();
    const app = mount(<BookingForm t={i18nMock} bookingAction={mock} />);
    app.find("button").simulate("click");
    const actual = mock.mock.calls.length;
    expect(actual).toEqual(expected);
  });
});
