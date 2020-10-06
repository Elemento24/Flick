import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/action';

const Latest = props => {
    return (
      <div>
        <p>This is the Latest!</p>
        <button onClick={props.onGetLatest}> GET LATEST MOVIE </button>
      </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onGetLatest: () => dispatch(actions.getLatest())
    };
};

export default connect(null, mapDispatchToProps)(Latest);
