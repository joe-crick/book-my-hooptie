import React, { Component } from "react";
import * as actions from "./car-selection-actions";
import connect from "reduxigen/connect";
import Cars from "components/shared/car/car";
import displayCars from "utils/display-async-data";
import { translate } from "react-i18next";

export class CarSelection extends Component {
  componentDidMount() {
    const { getCars, pickupLocation, dropoffLocation, pickupDate, pickupTime } = this.props;
    getCars({
      pickupLocation,
      dropoffLocation,
      pickupDate,
      pickupTime,
      max: 3
    });
  }

  navigateToCarList = () => {
    event.preventDefault();
    const base = this.props.i18n.language;
    this.props.history.push(`/${base}/book`);
  };

  renderCars = car => <Cars key={car.id} car={car} bookNow={this.navigateToCarList} />;

  render() {
    const { cars, cars_loading, cars_error, t: translate } = this.props;
    return (
      <React.Fragment>
        {displayCars({
          dataSet: cars,
          render: this.renderCars,
          loading: cars_loading,
          error: cars_error,
          loadingMessage: translate("carSelection.loadingMessage")
        })}
      </React.Fragment>
    );
  }
}

export default translate()(connect(["cars", "cars_loading", "cars_error"], actions)(CarSelection));
