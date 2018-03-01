import React from "react";
import styles from "./read-mode.less";
import { translate } from "react-i18next";

export const RideDetailsReadMode = ({ pickup, dropoff, dateTime, t: translate }) => (
  <div className={styles.container}>
    <div>
      <strong>{translate("pickup.label")}</strong> {pickup}
    </div>
    <div>
      <strong>{translate("dropoff.label")}</strong> {dropoff}
    </div>
    <div>
      <strong>{translate("booking.pickupDate")}</strong> {dateTime}
    </div>
  </div>
);

export default translate()(RideDetailsReadMode);
