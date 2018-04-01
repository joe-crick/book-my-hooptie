import React from "react";
import connect from "reduxigen/connect";
import { translate } from "react-i18next";
import styles from "./book-ride.less";

/**
 * ReturnRide uses the experimental connect automap functionality
 * @param props
 * @return {*}
 * @constructor
 */
export const ReturnRide = props => {
  const translate = props["t"];
  return (
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
              {props.pickupLocation}
            </li>
            <li>
              <strong>
                <span>{translate("placeBooking.returnDropoff")}</span>
              </strong>
              {props.dropoffLocation}
            </li>
          </ol>
          <button className={styles.button}>
            <span>{translate("placeBooking.addReturnButton")}</span>
          </button>
        </div>
      </div>
    </fieldset>
  );
};

export default translate()(connect()(ReturnRide));
