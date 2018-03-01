import React from "react";
import { connect } from "react-redux";
import { getCars } from "./car-selection-actions";

export const carSelection = props => {
  return <div>blah</div>;
}

const matchDispatchToProps = dispatch => ({
  getMatchingVehicles(query) {
    dispatch(getCars(query));
  }
});

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, matchDispatchToProps)(carSelection);
