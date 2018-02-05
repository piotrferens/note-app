export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const SELECT_NOTE = 'SELECT_NOTE';
export const selectNote = id => ({
    type: SELECT_NOTE,
    payload: id
});
