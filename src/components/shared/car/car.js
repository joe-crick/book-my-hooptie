import React from "react";
import styles from "./car-styles.less";
import { translate } from "react-i18next";

export const Car = ({ t: translate, car, bookNow }) => (
  <div className={styles.car}>
    <img className={styles.carImage} alt={car.type} src={`/img/${car.image}`} />

    <div className={styles.carDetails}>
      <h2 className="car-type">{car.type}</h2>
      <div className="car-description">{car.description}</div>
      <ul className="fa-ul">
        <li className="car-passengers">
          <i className="fas fa-user-circle fa-li" />
          <span>{car.passengers}</span>
          <span className={styles.detailLabel}>{translate("car.passengers")}</span>
        </li>
        <li className="car-luggage">
          <i className="fas fa-suitcase fa-li" />
          <span>{car.luggage}</span>
          <span className={styles.detailLabel}>{translate("car.luggage")}</span>
        </li>
        <li className="car-terms">
          <i className="fas fa-clipboard-check  fa-li" />
          <span>{translate("car.terms")}</span>
        </li>
      </ul>
    </div>

    <div className={styles.priceDetails}>
      <div>{car.price}</div>
      <div>
        <span>{translate("car.includedInPrice")}</span>
      </div>
      <p>{translate("car.taxes")}</p>
      <button className={styles.button} onClick={bookNow}>
        {translate("car.bookCar")}
      </button>
    </div>
  </div>
);

export default translate()(Car);
