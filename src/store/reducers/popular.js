import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    popularMovie: null,
    popularLoading: true,
    popularError: null
};

const getPopularStart = (state, action) => {
    return updateObject(state, {
        popularLoading: true
    });  
};

const getPopularSuccess = (state, action) => {
    return updateObject(state, {
        popularMovie: action.popularMovie,
        popularLoading: false
    });
};

const getPopularFail = (state,action) => {
    return updateObject(state, {
        popularLoading: false,
        popularError: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_POPULAR_START: return getPopularStart(state, action);
        case actionTypes.GET_POPULAR_SUCCESS: return getPopularSuccess(state, action);
        case actionTypes.GET_POPULAR_FAIL: return getPopularFail(state, action);
        default: return state;
    }
};

export default reducer;