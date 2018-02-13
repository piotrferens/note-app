export const ADD_NOTE = 'ADD_NOTE';
export const addNote = note => ({
    type: ADD_NOTE,
    payload: note
});

export const REMOVE_NOTE = 'REMOVE_NOTE';

export const SELECT_NOTE = 'SELECT_NOTE';
export const selectNote = id => ({
    type: SELECT_NOTE,
    payload: id
});

export const SEARCH_NOTE = 'SEARCH_NOTE';
export const searchNote = text => ({
    type: SEARCH_NOTE,
    payload: text
});
