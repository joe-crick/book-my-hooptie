import React, { Component } from "react";
import { connect } from "react-redux";
import { getCars } from "./car-selection-actions";
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

const matchDispatchToProps = dispatch => ({
  getMatchingVehicles(query) {
    dispatch(getCars(query));
  }
});

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, matchDispatchToProps)(carSelection);
