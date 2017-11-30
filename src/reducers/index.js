import {SET_LANGUAGE} from '../actions';

const initialState = {
    language: 'en'
};

export const languageReducer = (state=initialState, action) => {
    if (action.type === SET_LANGUAGE) {
        return Object.assign({}, state, {
            language: action.language
        });
    }
    return state;
};

