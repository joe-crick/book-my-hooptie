import React from "react";
import { storiesOf } from "@storybook/react";
import { i18nMock } from "test/test-utils";
import { BookingForm } from "./booking-form";

storiesOf("BookingForm", module).add("default", () => <BookingForm t={i18nMock} />);
