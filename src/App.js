import React, { Component } from 'react';

import { Header } from './Header';
import { NoteListContainer } from './NoteList';
import { NoteDetailsContainer } from './NoteDetails';

export class App extends Component {
    render() {
        return (
            <div className="App">
                APP
                <Header />
                <NoteListContainer />
                <NoteDetailsContainer />
            </div>
        );
    }
}
