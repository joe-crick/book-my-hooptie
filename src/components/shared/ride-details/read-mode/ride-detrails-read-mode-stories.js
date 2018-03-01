import React from "react";
import { storiesOf } from "@storybook/react";
import { i18nMock } from "test/test-utils";

import { RideDetailsReadMode } from "./ride-details-read-mode";

storiesOf("RideDetailsReadMode", module).add("default", () => (
  <RideDetailsReadMode
    pickup="pickup"
    dropoff="dropoff"
    dateTime="date-time"
    t={i18nMock}
  />
));
