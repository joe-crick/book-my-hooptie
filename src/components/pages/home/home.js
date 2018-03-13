import React, { Component } from "react";
import { connect } from "react-redux";
import BookingHeader from "./booking-header/booking-header";
import BookingForm from "components/shared/booking-form/booking-form";
import { setPickup, setDropoff, setDate, setTime, getCars } from "./booking-actions";

class Home extends Component {
  componentDidMount() {
    this.props.getCarsList(25);
  }

  render() {
    const {
      pickup,
      pickupDate,
      dropoff,
      updatePickup,
      updateDate,
      updateDropoff,
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
          updateDropoff={updateDropoff}
          updatePickup={updatePickup}
          updateDate={updateDate}
          updateTime={setTime}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ pickup, dropoff, pickupDate, time, cars, cars_loading }) => ({
  pickup,
  dropoff,
  pickupDate,
  time,
  cars,
  cars_loading
});

const matchDispatchToProps = dispatch => ({
  updatePickup(event) {
    dispatch(setPickup(event.target.value));
  },
  updateDropoff(event) {
    dispatch(setDropoff(event.target.value));
  },
  updateDate(event) {
    dispatch(setDate(event.target.value));
  },
  updateTime(event) {
    dispatch(setTime(event.target.value));
  },
  getCarsList(count) {
    dispatch(getCars(count));
  }
});

export default connect(mapStateToProps, matchDispatchToProps)(Home);
