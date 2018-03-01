import React from "react";
import styles from "./booking-header.less";
import { translate } from "react-i18next";

export const BookingHeader = ({ t: translate }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{translate("header.title")}</h1>
    <p className={styles.subtitle}>{translate("header.subtitle")}</p>
  </header>
);

export default translate()(BookingHeader);
