import React from "react";
import * as actions from "./ride-details-actions";
import { translate } from "react-i18next";
import styles from "../book-ride.less";
import connect from "reduxigen/connect";

const RideDetails = props => {
  const translate = props["t"];
  const { setComments } = props;
  return (
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
            <label className={styles.label} htmlFor="commentsForTheDriver">
              {translate("placeBooking.commentsForDriver")}
            </label>
          </span>
          <span>
            <textarea
              className={styles.textArea}
              name="commentsForTheDriver"
              id="commentsForTheDriver"
              maxLength="500"
              rows="2"
              placeholder={translate("placeBooking.rideDetailsPlaceholder")}
              value={props.driverComments}
              onChange={setComments}
            />
          </span>
        </div>
      </div>
    </fieldset>
  );
};

export default translate()(connect(actions)(RideDetails));
