import React, { Component } from "react";
import BookingHeader from "./booking-header/booking-header";
import BookingForm from "components/shared/booking-form/booking-form";
import * as actions from "./booking-actions";
import connect from "simpl-r/connect";

class Home extends Component {
  componentDidMount() {
    this.props.getCars(5);
  }

  render() {
    const {
      pickup,
      pickupDate,
      dropoff,
      setPickup,
      setDate,
      setDropoff,
      setTime,
      time,
      cars,
      cars_loading
    } = this.props;
    return (
      <React.Fragment>
        <BookingHeader />
        <div>
          Cars:
          {cars_loading ? (
            <h1>Cars loading...</h1>
          ) : (
            <ul>{cars.map(car => <li key={car.id}>{car.companyName}</li>)}</ul>
          )}
        </div>
        <BookingForm
          pickup={pickup}
          dropoff={dropoff}
          time={time}
          pickupDate={pickupDate}
          updateDropoff={setDropoff}
          updatePickup={setPickup}
          updateDate={setDate}
          updateTime={setTime}
        />
      </React.Fragment>
    );
  }
}
const stateMap = ["pickup", "dropoff", "pickupDate", "time", "cars", "cars_loading"];

export default connect(stateMap, actions)(Home);
