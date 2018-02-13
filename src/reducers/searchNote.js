import { SEARCH_NOTE } from './../actions/actions';

const initialState = '';

export const searchNote = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_NOTE:
            return action.payload;
        default:
            return state;
    }
};
