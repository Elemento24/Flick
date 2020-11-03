import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    searchResults: null,
    searchLoading: false,
    searchError: null
};

const getSearchResultsStart = (state, action) => {
    return updateObject(state, {
        searchLoading: true
    });  
};

const getSearchResultsSuccess = (state, action) => {
    return updateObject(state, {
        searchResults: action.movies,
        searchLoading: false
    });
};

const getSearchResultsFail = (state,action) => {
    return updateObject(state, {
        searchLoading: false,
        searchError: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_SEARCH_RESULTS_START: return getSearchResultsStart(state, action);
        case actionTypes.GET_SEARCH_RESULTS_SUCCESS: return getSearchResultsSuccess(state, action);
        case actionTypes.GET_SEARCH_RESULTS_FAIL: return getSearchResultsFail(state, action);
        default: return state;
    }
};

export default reducer;