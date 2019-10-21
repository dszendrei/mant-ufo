import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <th style={{ padding: '10px', borderRadius: '0px' }}> {this.props.value} </th>
        )
    }
}

export default Header;
