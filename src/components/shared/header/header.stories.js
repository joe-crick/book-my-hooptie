import React from "react";
import { storiesOf } from "@storybook/react";
import { i18nMock } from "test/test-utils";
import { Header } from "./header";

storiesOf("Header", module).add("default", () => <Header t={i18nMock} />);
