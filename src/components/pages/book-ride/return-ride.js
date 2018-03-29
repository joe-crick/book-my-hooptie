import React from "react";
import { translate } from "react-i18next";
import styles from "./book-ride.less";

export const ReturnRide = ({ t: translate }) => (
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
            </strong>Berlin Tegel Airport (TXL), Zufahrt zum Flughafen Tegel, 13405 Berlin, Germany
          </li>
          <li>
            <strong>
              <span>{translate("placeBooking.returnDropoff")}</span>
            </strong>Traunsteiner Str., 10781 Berlin, Germany
          </li>
        </ol>
        <button className={styles.button}>
          <span>{translate("placeBooking.addReturnButton")}</span>
        </button>
      </div>
    </div>
  </fieldset>
);

export default translate()(ReturnRide);
