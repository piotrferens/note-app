import { ADD_NOTE, REMOVE_NOTE } from '../actions/actions';

const initialState = [];

export const notes = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, action.payload];
        case REMOVE_NOTE:
            return [];
        default:
            return state;
    }
};
