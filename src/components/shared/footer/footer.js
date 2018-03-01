import React from "react";
import styles from "./footer.less";
import { translate } from "react-i18next";

export const Footer = ({ t: translate }) => (
  <footer className={styles.footer}>
    <h1 className={styles.text}>{translate("footer")}</h1>
  </footer>
);

export default translate()(Footer);
