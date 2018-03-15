import React, { Component } from "react";
import * as actions from "./car-selection-actions";
import { connect } from "simpl-r";
import Cars from "components/shared/car/car";

export class carSelection extends Component {
  componentDidMount() {
    const { getMatchingVehicles, carQuery } = this.props;
    getMatchingVehicles(carQuery);
  }

  render() {
    return (
      <div>
        <Cars />
      </div>
    );
  }
}

export default connect(["cars"], actions)(carSelection);
