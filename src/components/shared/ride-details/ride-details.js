import React, { Component } from "react";
import { translate } from "react-i18next";
import { connect } from "simpl-r/connect";
import * as actions from "components/pages/home/booking-actions";
import ReadMode from "./read-mode/ride-details-read-mode";
import BookingForm from "components/shared/booking-form/booking-form";

export class RideDetails extends Component {
  state = {
    isEdit: false
  };

  toggleDisplay = () => {
    const isEdit = this.state.isEdit;
    this.setState({ isEdit: !isEdit });
  };

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
      t: translate
    } = this.props;

    return (
      <div>
        {this.state.isEdit ? (
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
        ) : (
          <ReadMode
            pickup={pickup}
            dropoff={dropoff}
            time={time}
            pickupDate={pickupDate}
            updateDropoff={updateDropoff}
            updatePickup={updatePickup}
            updateDate={updateDate}
            updateTime={setTime}
          />
        )}
        <button onClick={this.toggleDisplay}>{translate("actions.edit")}</button>
      </div>
    );
  }
}

export const RideDetailsStory = translate()(RideDetails);

export default connect(["pickup", "dropoff", "dateTime"], actions)(RideDetailsStory);
