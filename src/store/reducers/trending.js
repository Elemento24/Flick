import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    trending: [],
    trendingLoading: false,
    trendingError: null,
    trendingPage: 1,
    trendingHasMore: true
};

const getTrendingStart = (state, action) => {
    return updateObject(state, {
        trendingLoading: true
    });
};

const getTrendingSuccess = (state, action) => {
    return updateObject(state, {
        trending: [...state.trending, ...action.movies],
        trendingPage: action.page + 1,
        trendingLoading: false,
        trendingHasMore: action.hasMore
    });
};

const getTrendingFail = (state,action) => {
    return updateObject(state, {
        trendingLoading: false,
        trendingError: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_TRENDING_START: return getTrendingStart(state, action);
        case actionTypes.GET_TRENDING_SUCCESS: return getTrendingSuccess(state, action);
        case actionTypes.GET_TRENDING_FAIL: return getTrendingFail(state, action);
        default: return state;
    }
};

export default reducer;