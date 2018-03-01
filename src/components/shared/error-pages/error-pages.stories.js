import React from "react";
import { storiesOf } from "@storybook/react";
import { i18nMock } from "test/test-utils";

import { PageNotFound } from "./page-not-found";

storiesOf("PageNotFound", module).add("default", () => <PageNotFound t={i18nMock} />);
