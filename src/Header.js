import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchNote } from './actions/actions';

export class Header extends Component {
    render() {
        return (
            <div>
                <input onChange={e => this.props.searchNote(e.target.value)} />
                <button>+</button>
            </div>
        );
    }
}

export const HeaderContainer = connect(null, { searchNote })(Header);
