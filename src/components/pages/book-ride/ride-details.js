import React from "react";
import { translate } from "react-i18next";
import styles from "./book-ride.less";

const RideDetails = ({ t: translate }) => (
  <fieldset className={styles.fieldset}>
    <legend className={styles.legend}>
      <span>{translate("placeBooking.rideDetails")}</span>
    </legend>
    <div>
      <div>
        <p>
          <strong>
            <span>{translate("placeBooking.childrenQuestion")}</span>
          </strong>
        </p>
        <p>
          <span>{translate("placeBooking.childrenTravelNote")}</span>
        </p>
      </div>
      <div>
        <span>
          <label htmlFor="commentsForTheDriver">
            {translate("placeBooking.commentsForDriver")}
          </label>
        </span>
        <span>
          <textarea
            name="commentsForTheDriver"
            id="commentsForTheDriver"
            maxLength="500"
            rows="2"
            placeholder="e.g. child seat required, train number, cruise name…"
          />
        </span>
      </div>
    </div>
  </fieldset>
);

export default translate()(RideDetails);
