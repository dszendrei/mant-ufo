import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const style = {
            borderRadius: '1px',
            padding: '10px',
            margin: '4px',
            boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)'
        };

        return (
            <span> {this.props.data.value} </span>
        )
    }
}

export default Header;
