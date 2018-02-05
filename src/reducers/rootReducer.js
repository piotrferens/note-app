import { combineReducers } from 'redux';

import { notes } from './notes';
import { selectedNote } from './selectedNote';

export const rootReducer = combineReducers({
    notes,
    selectedNote
});
