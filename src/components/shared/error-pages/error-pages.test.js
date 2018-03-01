import React from "react";
import { PageNotFound } from "./page-not-found";
import renderer from "react-test-renderer";
import { i18nMock } from "test/test-utils";

describe("PageNotFound", () => {
  it("should render", () => {
    const component = renderer.create(<PageNotFound t={i18nMock} />);
    let header = component.toJSON();
    expect(header).toMatchSnapshot();
  });
});
