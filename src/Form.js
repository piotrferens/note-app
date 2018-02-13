import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote } from './actions/actions';

class Form extends Component {
    state = {
        title: '',
        text: '',
        description: ''
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="form">
                <div className="box">
                    <span className="box">Title</span>
                    <input name="title" onChange={this.onChange} className="box" />
                </div>
                <div className="box">
                    <span className="box">Few words</span>
                    <input name="text" onChange={this.onChange} className="box" />
                </div>
                <div className="box">
                    <span className="box">Description</span>
                    <textarea name="description" onChange={this.onChange} className="box" />
                </div>
                <button onClick={() => this.props.addNote({ ...this.state, id: Date.now() })}>
                    Add note
                </button>
            </div>
        );
    }
}

export const FormContainer = connect(null, { addNote })(Form);
