import { ADD_NOTE, REMOVE_NOTE } from '../actions/actions';

const initialState = [
    { title: 'go shopping', text: 'buy jeans', id: 0 },
    { title: 'go to work', text: 'iksde', id: 1 }
];

export const notes = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state];
        case REMOVE_NOTE:
            return [];
        default:
            return state;
    }
};
