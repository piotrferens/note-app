import { combineReducers } from 'redux';

import { notes } from './notes';
import { selectedNote } from './selectedNote';
import { searchNote } from './searchNote';

export const rootReducer = combineReducers({
    notes,
    selectedNote,
    searchNote
});
