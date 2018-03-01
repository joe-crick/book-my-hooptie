import React from "react";
import { storiesOf } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18n/i18next";
import { i18nMock } from "test/test-utils";
import { RideDetailsStory as RideDetails } from "./ride-details";
import TempFunction from "utils/temp-function";

storiesOf("RideDetails", module)
  .addDecorator(story => <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>)
  .add("default", () => (
    <RideDetails
      pickup="pickup"
      pickupDate="pickupdate"
      dropoff="dropoff"
      updatePickup={TempFunction}
      updateDate={TempFunction}
      updateDropoff={TempFunction}
      setTime={TempFunction}
      time="time"
    />
  ));
