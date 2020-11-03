import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    genres: []
};

const getGenres = (state, action) => {
    return updateObject(state, {
        genres: action.genres
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_GENRES: return getGenres(state, action);
        default: return state;
    }
};

export default reducer;