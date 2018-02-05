import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteDetails extends Component {
    render() {
        return this.props.note ? <div>{this.props.note.text}</div> : null;
    }
}

function mapStateToProps(state) {
    const note = state.notes.find(note => note.id === state.selectedNote);
    return {
        note
    };
}

export const NoteDetailsContainer = connect(mapStateToProps, {})(NoteDetails);
