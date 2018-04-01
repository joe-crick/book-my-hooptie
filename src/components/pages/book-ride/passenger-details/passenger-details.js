import React from "react";
import { translate } from "react-i18next";
import styles from "../book-ride.less";
import * as actions from "./passenger-details-actions";
import connect from "reduxigen/connect";

/**
 * NOTE: uses the experimental connect automap functionality
 * @param props
 * @return {*}
 * @constructor
 */
export const PassengerDetails = props => {
  // Don't automap the `t` function
  const translate = props["t"];
  // Actions aren't impacted by automap. They can be destructured.
  const { setTitle, setLastName, setFirstName, setEmail, setMobile } = props;
  return (
    <fieldset className={styles.fieldset}>
      <span>
        <span>{translate("general.requiredFields")}</span>
      </span>
      <legend className={styles.legend}>
        <span>{translate("placeBooking.passengerDetails")}</span>
      </legend>
      <div>
        <span>
          <label className={styles.label} htmlFor="title">
            {translate("general.title")}
          </label>
        </span>
        <div>
          <select
            className={styles.select}
            id="title"
            name="title"
            value={props.title}
            onChange={setTitle}>
            <option />
            <option value="Mr">{translate("general.mr")}</option>
            <option value="Ms">{translate("general.ms")}</option>
            <option value="Dr">{translate("general.dr")}</option>
            <option value="Prof">{translate("general.prof")}</option>
          </select>
        </div>
        <span>
          <label className={styles.label} htmlFor="firstname">
            {translate("placeBooking.firstName")}
          </label>
        </span>
        <input
          className={styles.input}
          type="text"
          maxLength="50"
          id="firstname"
          name="firstname"
          onChange={setFirstName}
          value={props.firstName}
        />
        <span>
          <label className={styles.label} htmlFor="lastname">
            {translate("placeBooking.lastName")}
          </label>
        </span>
        <input
          className={styles.input}
          type="text"
          maxLength="50"
          id="lastname"
          name="lastname"
          onChange={setLastName}
          value={props.lastName}
        />
        <span>
          <label className={styles.label} htmlFor="emailaddress">
            {translate("placeBooking.email")}
          </label>
        </span>
        <input
          className={styles.input}
          maxLength="50"
          id="emailaddress"
          name="emailaddress"
          onChange={setEmail}
          value={props.email}
        />
        <div>
          <span>
            <label className={styles.label} htmlFor="contactNumber">
              {translate("placeBooking.mobile")}
            </label>
          </span>
          <div>
            <a href="#" tabIndex="-1">
              <div />
            </a>
            <input
              className={styles.input}
              type="tel"
              id="contactNumber"
              name="contactNumber"
              onChange={setMobile}
              value={props.mobile}
            />
            <input className={styles.input} type="hidden" name="formattedContactNumber" value="" />
          </div>
        </div>
        <span>
          <p>{translate("placeBooking.mobileNumberRequiredMessage")}</p>
        </span>
      </div>
    </fieldset>
  );
};

export default translate()(connect(actions)(PassengerDetails));
