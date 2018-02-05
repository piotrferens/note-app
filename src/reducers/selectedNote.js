import { SELECT_NOTE } from '../actions/actions';

export const selectedNote = (state = null, action) => {
    switch (action.type) {
        case SELECT_NOTE:
            return action.payload;
        default:
            return state;
    }
};
