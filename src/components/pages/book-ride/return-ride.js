import React from "react";
import connect from "reduxigen/connect";
import { translate } from "react-i18next";
import styles from "./book-ride.less";

export const ReturnRide = ({ pickupLocation, dropoffLocation, t: translate }) => (
  <fieldset className={styles.fieldset}>
    <legend className={styles.legend}>{translate("placeBooking.needReturn")}</legend>
    <div>
      <div>
        <span>
          <p>{translate("placeBooking.bookReturn")}</p>
        </span>
        <ol>
          <li>
            <strong>
              <span>{translate("placeBooking.returnPickup")}</span>
            </strong>
            {pickupLocation}
          </li>
          <li>
            <strong>
              <span>{translate("placeBooking.returnDropoff")}</span>
            </strong>
            {dropoffLocation}
          </li>
        </ol>
        <button className={styles.button}>
          <span>{translate("placeBooking.addReturnButton")}</span>
        </button>
      </div>
    </div>
  </fieldset>
);

export default translate()(connect(["pickupLocation", "dropoffLocation"])(ReturnRide));
