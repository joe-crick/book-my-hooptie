import React from "react";
import { storiesOf } from "@storybook/react";
import { i18nMock } from "test/test-utils";

import { Footer } from "./footer";

storiesOf("Footer", module).add("default", () => <Footer t={i18nMock} />);
