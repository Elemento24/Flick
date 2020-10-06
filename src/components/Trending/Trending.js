import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/action';

const Trending = (props) => {
    return (
        <div>
            <h1>THIS IS THE TRENDING PAGE</h1>
            <button onClick = { props.onGetTrending }> CLICK HERE TO GET TRENDING MOVIES </button>
        </div>    
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onGetTrending: () => dispatch(actions.getTrending())
    };
};

export default connect(null, mapDispatchToProps)(Trending);