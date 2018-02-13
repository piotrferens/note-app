import React, { Component } from 'react';

import { HeaderContainer } from './Header';
import { FormContainer } from './Form';

import { NoteListContainer } from './NoteList';
import { NoteDetailsContainer } from './NoteDetails';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <FormContainer />
                <HeaderContainer />
                <NoteListContainer />
                <NoteDetailsContainer />
            </div>
        );
    }
}
