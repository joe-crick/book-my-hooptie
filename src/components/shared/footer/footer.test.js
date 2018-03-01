import React from "react";
import {Footer} from "./footer";
import renderer from "react-test-renderer";
import { i18nMock } from "test/test-utils";

describe("Header", () => {
  it("should render", () => {
    const component = renderer.create(<Footer t={i18nMock} />);
    let header = component.toJSON();
    expect(header).toMatchSnapshot();
  });
});
