import React, { Component } from "react";
import BookingHeader from "./booking-header/booking-header";
import BookingForm from "components/shared/booking-form/booking-form";
import * as actions from "./booking-actions";
import connect from "reduxigen/connect";
import { translate } from "react-i18next";

class Home extends Component {
  navigateToCarList = event => {
    event.preventDefault();
    const base = this.props.i18n.language;
    this.props.history.push(`/${base}/hoopties`);
  };

  render() {
    const {
      pickupLocation,
      dropoffLocation,
      pickupDate,
      pickupTime,
      setPickup,
      setDate,
      setDropoff,
      setTime
    } = this.props;
    return (
      <React.Fragment>
        <BookingHeader />
        <BookingForm
          pickup={pickupLocation}
          dropoff={dropoffLocation}
          pickupDate={pickupDate}
          time={pickupTime}
          updateDropoff={setDropoff}
          updatePickup={setPickup}
          updateDate={setDate}
          updateTime={setTime}
          bookingAction={this.navigateToCarList}
        />
      </React.Fragment>
    );
  }
}
const stateMap = ["pickup", "dropoff", "pickupDate", "time"];

export default translate()(connect(stateMap, actions)(Home));
