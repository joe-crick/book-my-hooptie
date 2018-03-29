import React from "react";
import Autocomplete from "components/shared/autocomplete/autocomplete";
import styles from "./booking-form.less";
import { translate } from "react-i18next";

export const BookingForm = props => {
  const {
    pickup,
    dropoff,
    time,
    pickupDate,
    updatePickup,
    updateDate,
    updateDropoff,
    updateTime,
    bookingAction,
    t: translate
  } = props;
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{translate("booking.legend")}</legend>
        <Autocomplete
          label={translate("pickup.label")}
          name="pickup"
          placeholder={translate("pickup.placeholder")}
          onChange={updatePickup}
          value={pickup}
        />
        <Autocomplete
          label={translate("dropoff.label")}
          name="dropoff"
          placeholder={translate("dropoff.placeholder")}
          onChange={updateDropoff}
          value={dropoff}
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label className={styles.label} htmlFor="pickup-date">
          {translate("booking.pickupDate")}
        </label>
        <input
          type="date"
          className={styles.input}
          id="pickup-date"
          value={pickupDate}
          onChange={updateDate}
        />
        <label className={styles.label} htmlFor="pickup-time">
          {translate("booking.pickupTime")}
        </label>
        <input className={styles.input} type="time" onChange={updateTime} value={time} />
      </fieldset>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={bookingAction}>
          {translate("booking.bookNow")}
        </button>
      </div>
    </form>
  );
};

export default translate()(BookingForm);
