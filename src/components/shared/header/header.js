import React from "react";
import styles from "./header.less";
import { translate } from "react-i18next";

export const Header = ({ t: translate }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{translate("logo.title")}</h1>
  </header>
);

export default translate()(Header);
