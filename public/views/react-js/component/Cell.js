import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <td> {this.props.data.value} </td>
        )
    }
}

export default Header;
