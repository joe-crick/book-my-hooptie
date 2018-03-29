import React from "react";
import styles from "./header.less";
import { translate } from "react-i18next";

export const Header = ({ t: translate }) => (
  <header className={styles.header}>
    <a href="/">
      <h1 className={styles.title}>{translate("logo.title")}</h1>
    </a>
  </header>
);

export default translate()(Header);
