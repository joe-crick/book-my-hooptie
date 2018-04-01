import React from "react";
import ReturnRide from "./return-ride";
import PassengerDetails from "./passenger-details/passenger-details";
import RideDetails from "./ride-details/ride-details";
import styles from "./book-ride.less";
import { translate } from "react-i18next";

export const BookRide = ({ t: translate }) => (
  <form className={styles.form}>
    <PassengerDetails />
    <RideDetails />
    <ReturnRide />
    <div>
      <span>
        <button className={styles.button}>{translate("placeBooking.placeBooking")}</button>
      </span>
    </div>
  </form>
);

export default translate()(BookRide);
