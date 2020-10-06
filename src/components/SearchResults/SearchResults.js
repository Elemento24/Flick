import React from 'react';
import { connect } from 'react-redux'; 

import * as actions from '../../store/actions/action';

const SearchResults = (props) => {
    return (
        <div>
            <h1>THIS IS THE SEARCH RESULTS PAGE</h1>
            <button onClick = { props.onSearch } > CLICK HERE FOR SEARCH RESULTS </button>
        </div>    
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: () => dispatch(actions.getSearchResults())
    };
};

export default connect(null, mapDispatchToProps)(SearchResults);