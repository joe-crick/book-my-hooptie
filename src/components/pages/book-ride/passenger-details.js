import React from "react";
import { translate } from "react-i18next";
import styles from "./book-ride.less";

export const PassengerDetails = ({ t: translate }) => (
  <fieldset className={styles.fieldset}>
    <span>
      <span>{translate("general.requiredFields")}</span>
    </span>
    <legend className={styles.legend}>
      <span>{translate("placeBooking.passengerDetails")}</span>
    </legend>
    <div>
      <span>
        <label htmlFor="title">{translate("general.title")}</label>
      </span>
      <div>
        <select id="title" name="title">
          <option value="Mr">{translate("general.mr")}</option>
          <option value="Ms">{translate("general.ms")}</option>
          <option value="Dr">{translate("general.dr")}</option>
          <option value="Prof">{translate("general.prof")}</option>
        </select>
      </div>
      <span>
        <label htmlFor="firstname">{translate("placeBooking.firstName")}</label>
      </span>
      <input
        className={styles.input}
        type="text"
        maxLength="50"
        id="firstname"
        name="firstname"
        value=""
      />
      <span>
        <label htmlFor="lastname">{translate("placeBooking.lastName")}</label>
      </span>
      <input
        className={styles.input}
        type="text"
        maxLength="50"
        id="lastname"
        name="lastname"
        value=""
      />
      <span>
        <label htmlFor="emailaddress">{translate("placeBooking.email")}</label>
      </span>
      <input
        className={styles.input}
        maxLength="50"
        id="emailaddress"
        name="emailaddress"
        value=""
      />
      <div>
        <span>
          <label htmlFor="contactNumber">{translate("placeBooking.mobile")}</label>
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
            value="+44"
          />
          <input
            className={styles.input}
            type="hidden"
            id="contactNumberCountry"
            name="contactNumberCountry"
            value="GB"
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

export default translate()(PassengerDetails);
