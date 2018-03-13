import React, { Component } from "react";
import { connect } from "react-redux";

export const simplify = (actions, stateMap) => PassthroughComponent => {
  const mapStateToProps = state =>
    stateMap.reduce(
      (prev, cur) => ({
        ...prev,
        [cur]: state[cur]
      }),
      {}
    );

  const matchDispatchToProps = dispatch =>
    Object.keys(actions).reduce(
      (prev, cur) => ({
        ...prev,
        [cur]: args => dispatch(actions[cur](args))
      }),
      {}
    );

  return connect(mapStateToProps, matchDispatchToProps)(
    class extends Component {
      render() {
        return (
          <React.Fragment>
            <PassthroughComponent {...this.props} />
          </React.Fragment>
        );
      }
    }
  );
};
