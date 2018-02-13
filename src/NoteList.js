import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectNote } from './actions/actions';
import { Note } from './Note';

class NoteList extends Component {
    render() {
        return (
            <div>
                {this.props.notes.map(note => (
                    <Note selectNote={this.props.selectNote} note={note} key={note.id} />
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const notes = state.notes.filter(note =>
        note.title.toLowerCase().includes(state.searchNote.toLowerCase())
    );
    return {
        notes
    };
}

export const NoteListContainer = connect(mapStateToProps, { selectNote })(NoteList);
