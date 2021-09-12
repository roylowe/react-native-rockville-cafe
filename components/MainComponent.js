import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { SPECIALS } from '../shared/specials';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            specials: SPECIALS
        };
    }

    render() {
        return <Directory specials={this.state.specials} />;
    }
}

export default Main;