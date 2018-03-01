import React from "react";
import styles from "./autocomplete.less";

export default ({ label, name, placeholder, onChange, value, render }) => (
  <React.Fragment>
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    <input
      type="text"
      id={name}
      placeholder={placeholder}
      aria-describedby={`${name}-label`}
      aria-autocomplete="list"
      aria-owns={`${name}-items`}
      value={value}
      onChange={onChange}
      className={styles.locationInput}
    />
    {render && render()}
  </React.Fragment>
);
