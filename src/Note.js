import React, { Component } from 'react';

export class Note extends Component {
    render() {
        return (
            <div onClick={() => this.props.selectNote(this.props.note.id)}>
                {this.props.note.title}
            </div>
        );
    }
}
