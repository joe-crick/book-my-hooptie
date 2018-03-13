import React, { Component } from "react";
import { connect } from "react-redux";
import BookingHeader from "./booking-header/booking-header";
import BookingForm from "components/shared/booking-form/booking-form";
import { setPickup, setDropoff, setDate, setTime, getJobs } from "./booking-actions";

class Home extends Component {
  componentDidMount() {
    this.props.getJobsList(25);
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
      time
    } = this.props;
    return (
      <React.Fragment>
        <BookingHeader />
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

const mapStateToProps = ({ pickup, dropoff, pickupDate, time }) => ({
  pickup,
  dropoff,
  pickupDate,
  time
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
  getJobsList(count) {
    dispatch(getJobs(count));
  }
});

export default connect(mapStateToProps, matchDispatchToProps)(Home);
